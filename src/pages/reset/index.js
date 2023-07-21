import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { reset } from "@/services/auth/auth";
import useNotificationStore from "@/store/notificationStore";
import Ajv from "ajv";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { set } from "lodash";

const Reset = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const notification = useNotificationStore((state) => state.notification);
  const [validationErrors, setValidationErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      await reset({
        password: formData.password,
        token: router.query.token,
      });
      notification({
        type: "success",
        message: "Password reset successfully! Please login",
        open: true,
      });
      router.push("/login");
    } else {
      notification({
        type: "error",
        message: "Password does not match",
        open: true,
      });
    }
  };

  const EyeOff = (showFun) => {
    return (
      <AiOutlineEyeInvisible
        onClick={() => showFun((prevData) => !prevData)}
        className="h-5 w-5 absolute top-4 right-4 cursor-pointer text-gray-500" // Adjust the size and position of the icon using the "h-6", "w-6", "top-4", and "right-4" classes
      />
    );
  };

  const EyeOn = (showFun) => {
    return (
      <AiOutlineEye
        onClick={() => showFun((prevData) => !prevData)}
        className="h-5 w-5 absolute top-4 right-4 cursor-pointer text-gray-500" // Adjust the size and position of the icon using the "h-6", "w-6", "top-4", and "right-4" classes
      />
    );
  };

  return (
    <section className="flex justify-center items-center h-[100vh] bg-rest-bg-img bg-cover bg-center bg-no-repeat">
      <div className="shadow-md p-10 rounded-md w-[500px]">
        <Image
          src="/assets/Logo.svg"
          width={200}
          height={200}
          alt="background"
        />
        <form className="mt-6 reset-form">
          <label className="mt-4 font-medium">Password</label>
          <div className="flex flex-col relative mb-4">
            <input
              placeholder="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="p-3  bg-[#F3F3F3] rounded-md text-lg password-reveal" // Adjust the size of the text by changing the "text-xl" class to your desired size
            />

            {showPassword ? EyeOff(setShowPassword) : EyeOn(setShowPassword)}
            {validationErrors.password && (
              <p className="text-red-600 text-[12px]">
                {validationErrors.password}
              </p>
            )}
          </div>

          <label className="font-medium">Confirm Password</label>
          <div className="flex flex-col relative">
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-3 bg-[#F3F3F3] rounded-md text-lg password-reveal" // Adjust the size of the text by changing the "text-xl" class to your desired size
            />
            {showConfirmPassword
              ? EyeOff(setShowConfirmPassword)
              : EyeOn(setShowConfirmPassword)}
          </div>
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
            className="bg-[#FA4795] mt-8 p-3 rounded-md w-full text-white"
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
