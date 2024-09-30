import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const TermsOfService = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Terms of Service
        </h2>
        <p className="text-lg  mb-4">
          By accessing or using Roadmapper, you agree to be bound by these Terms
          of Service. If you do not agree with any part of these terms, please
          do not use our service.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          User Responsibilities
        </h3>
        <p className="text-lg  mb-4">
          Users are responsible for ensuring that their activities comply with
          all applicable laws and regulations.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Intellectual Property
        </h3>
        <p className="text-lg  mb-4">
          All content provided on Roadmapper is owned by us or our licensors.
          Unauthorized use of any material is prohibited.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Limitation of Liability
        </h3>
        <p className="text-lg mb-4">
          We shall not be liable for any damages resulting from the use or
          inability to use our service.
        </p>
      </div>
    </>
  );
};

export default TermsOfService;
