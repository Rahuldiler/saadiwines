import React, { useState } from "react";

const ContactForm = ({ themeColor, textBGColor = "#000" }) => {
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
    // Perform form submission logic here
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4 relative">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700 absolute top-3 left-0"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full lg:px-4 py-2 border-b-[1px] bg-transparent border-b-[#cccccc]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4 relative">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700 absolute top-3 left-0"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full lg:px-4 py-2  border-b-[1px] bg-transparent border-b-[#cccccc]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4 relative">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700 absolute top-3 left-0"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full lg:px-4 py-2  border-b-[1px] bg-transparent border-b-[#cccccc]  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: themeColor?.bgColor,
          color: themeColor?.textColor,
        }}
        className={`w-full lg:px-4 py-2 text-white bg-[${themeColor?.bgColor}]  rounded-md  focus:outline-none focus:bg-blue-600`}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
