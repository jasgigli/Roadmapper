import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Contact Us</h2>
        <p className="text-lg  mb-4">
          We would love to hear from you! Please fill out the form below with
          any questions or comments.
        </p>
        <form className="bg-gray-800 p-4 rounded-md shadow-md">
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="bg-yellow-400 text-gray-900 p-2 rounded-md hover:bg-yellow-300 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
