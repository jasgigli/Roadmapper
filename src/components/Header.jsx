import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-400 transition duration-300 hover:text-yellow-300">
          Roadmapper
        </h1>
        <nav>
          <Link
            to="/"
            className="mr-6 text-lg hover:text-yellow-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mr-6 text-lg hover:text-yellow-400 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-6 text-lg hover:text-yellow-400 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
