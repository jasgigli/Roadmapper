// src/pages/Frontend.jsx
import React from "react";
import Roadmap from "../../components/RoadmapCard"; // Assume Roadmap component displays the roadmap steps

const Frontend = () => {
  const roadmapData = [
    { title: "HTML & CSS", completed: true },
    { title: "JavaScript", completed: true },
    { title: "React", completed: false },
    // Add more steps as necessary
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Frontend Developer Roadmap
      </h1>
      <Roadmap steps={roadmapData} />
    </div>
  );
};

export default Frontend;
