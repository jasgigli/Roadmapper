import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container mx-auto p-6 ">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Privacy Policy
        </h2>
        <p className="text-lg  mb-4">
          At Roadmapper, we value your privacy and are committed to protecting
          your personal information. This privacy policy outlines how we
          collect, use, and safeguard your data.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Information Collection
        </h3>
        <p className="text-lg  mb-4">
          We may collect personal information when you interact with our
          website, such as when you fill out forms or contact us.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Use of Information
        </h3>
        <p className="text-lg  mb-4">
          The information we collect is used to improve our services and to
          communicate with you regarding your inquiries.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Data Security
        </h3>
        <p className="text-lg  mb-4">
          We implement appropriate security measures to protect your personal
          information from unauthorized access or disclosure.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
