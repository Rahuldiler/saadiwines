import React, { useState } from "react";
import Image from "next/image";

const ContactForm = ({staticTemplateData,rsvpImage}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 bg-white">
        <div>
          <Image
            src={rsvpImage}
            fill
            alt=""
            className="!relative object-cover"
          />
        </div>
        <form className="sm:my-20 my-4 mx-8" onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <div>
              <p>R.S.V.P</p>
              <p className=" !text-[20px] sm:!text-[30px]  mb-12">
                Confirmation at Marriage
              </p>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 border-b-[1px] bg-transparent border-b-[#cccccc] text-white  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2  border-b-[1px] bg-transparent border-b-[#cccccc]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4 relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full py-2  border-b-[1px] bg-transparent border-b-[#cccccc]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            style={{backgroundColor: staticTemplateData?.theme?.bgColor, color: staticTemplateData?.theme?.textColor}}
            className="w-full lg:px-4 py-2 rounded-md  focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
