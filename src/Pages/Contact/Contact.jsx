import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const handleMessage = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const contactMessage = Object.fromEntries(formData.entries());
    console.log(contactMessage);
    e.target.reset();
  };
  return (
    <div className="max-w-screen-lg mx-auto my-5 px-2">
      <Helmet>
        <title>Contact | SebaConnect</title>
      </Helmet>
      {/* Contact Form */}
      <form onSubmit={handleMessage} className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-secondary">
          Contact With Us
        </h2>
        <div>
          <label className="text-[.885rem] font-semibold ">Full name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded-md  border border-gray-500 focus:outline-none focus:border-secondary"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-[.885rem] font-semibold ">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded-md  border border-gray-500 focus:outline-none focus:border-secondary"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-[.885rem] font-semibold ">Message</label>
          <textarea
            rows="4"
            name="text"
            className="w-full p-3 rounded-md  border border-gray-500 focus:outline-none focus:border-secondary"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-secondary  transition"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
