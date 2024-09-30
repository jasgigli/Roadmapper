import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <>
      <div className="container mx-auto p-6 text-black">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          About Roadmapper
        </h2>
        <p className="text-lg  mb-4">
          Roadmapper is your ultimate guide to navigating the complex world of
          technology and career development. We provide structured roadmaps
          tailored to various tech roles, helping you acquire the necessary
          skills and knowledge for success.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Our Mission
        </h3>
        <p className="text-lg  mb-4">
          Our mission is to empower learners and professionals by providing
          accessible resources and guidance in the ever-evolving tech landscape.
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mt-4">
          Get in Touch
        </h3>
        <p className="text-lg ">
          If you have any questions, suggestions, or feedback, feel free to
          reach out to us through our contact page.
        </p>
      </div>
    </>
  );
};

export default About;
