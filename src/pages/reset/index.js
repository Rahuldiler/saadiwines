import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { reset } from "@/services/auth/auth";
import useNotificationStore from "@/store/notificationStore";
import Ajv from "ajv";

const Reset = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const notification = useNotificationStore((state) => state.notification);
  const [validationErrors, setValidationErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateData = (event) => {
    event.preventDefault();

    const ajv = new Ajv();
    const schema = {
      type: "object",
      additionalProperties: false,
      required: ["token", "password"],
      properties: {
        password: {
          type: "string",
          minLength: 6,
          maxLength: 20,
        },
        token: {
          type: "string",
          minLength: 1,
        },
      },
    };

    const validate = ajv.compile(schema);
    const isValid = validate({
      password: formData.password,
      token: router.query.token,
    });
    if (!isValid) {
      let errors = {};
      validate.errors.forEach((error) => {
        const { instancePath, message } = error;
        errors[instancePath.slice(1)] = message;
      });
      setValidationErrors(errors);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (formData.password === formData.confirmPassword) {
      const response = await reset({
        password: formData.password,
        token: router.query.token,
      });
      notification({
        type: "success",
        message: "Password reset successfully! Please login",
        open: true,
      });
      // router.push("/");
    } else {
      setValidationErrors({ confirmPassword: "Password does not match" });
      notification({
        type: "error",
        message: "Password does not match",
        open: true,
      });
    }
  };

  return (
    <section className="flex justify-center items-center h-[100vh] bg-rest-bg-img">
      <div className="shadow-md p-10 rounded-md w-[500px]">
        <Image
          src="/assets/Logo.svg"
          width={200}
          height={200}
          alt="background"
        />
        <form className="flex flex-col mt-6">
          <label className="mt-4 font-medium">Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-4 bg-[#F3F3F3] rounded-md"
          />
          {validationErrors.password && (
            <p className="text-red-600 text-[12px]">
              {validationErrors.password}
            </p>
          )}
          <label className="mt-4 font-medium">Confirm Password</label>

          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="p-4 bg-[#F3F3F3] rounded-md"
          />
          {validationErrors.confirmPassword && (
            <p className="text-red-600 text-[12px]">
              {validationErrors.confirmPassword}
            </p>
          )}

          {validationErrors.token && (
            <p className="text-red-600 text-[12px] mt-8">
              {validationErrors.token}
            </p>
          )}
          <button
            className="bg-[#FA4795] mt-8 p-4 rounded-md w-full text-white"
            onClick={validateData}
          >
            Reset
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reset;
