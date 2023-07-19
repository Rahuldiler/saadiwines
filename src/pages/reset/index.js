import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { reset } from "@/services/auth/auth";
import useNotificationStore from "@/store/notificationStore";
import Ajv from "ajv";

const Reset = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const notification = useNotificationStore((state) => state.notification);

  console.log(router.query);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  //   const validateData = (event) => {
  //     const ajv = new Ajv();
  //     const schema = {
  //       $schema: "https://json-schema.org/draft-07/schema",
  //       title: "Reset Password Schema",
  //       type: "object",
  //       additionalProperties: false,
  //       required: ["token", "password"],
  //       properties: {
  //         token: {
  //           type: "string",
  //           minLength: 1,
  //         },
  //         password: {
  //           type: "string",
  //           minLength: 6,
  //           maxLength: 20,
  //         },
  //       },
  //     };
  //     const validate = ajv.compile(schema);
  //     const isValid = validate(formData);

  //     if (!isValid) {
  //       const errors = {};
  //       validate.errors.forEach((error) => {
  //         const { dataPath, message } = error;
  //         errors[dataPath.slice(1)] = message;
  //       });
  //       setValidationErrors(errors);
  //     } else {
  //       handleSubmit(event);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const response = await reset({ password, token: router.query.token });
      notification({
        type: "success",
        message: "Password reset successfully! Please login",
        open: true,
      });
      router.push("/");
    } else {
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
        <form className="flex flex-col mt-6" onSubmit={handleSubmit}>
          <label className="mt-4 font-medium">Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="p-4 bg-[#F3F3F3] rounded-md"
          />
          <label className="mt-4 font-medium">Confirm Password</label>

          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            className="p-4 bg-[#F3F3F3] rounded-md"
          />
          <button className="bg-[#FA4795] mt-8 p-4 rounded-md w-full text-white">
            Reset
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reset;
