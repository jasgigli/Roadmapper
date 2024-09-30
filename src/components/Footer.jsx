import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Roadmapper. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          <a
            href="/privacy"
            className="hover:text-yellow-400 transition duration-200"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="/terms"
            className="hover:text-yellow-400 transition duration-200 ml-2"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
