// src/pages/Backend.jsx
import React from "react";
import Roadmap from "../../components/RoadmapCard";

const Backend = () => {
  const roadmapData = [
    { title: "Node.js", completed: true },
    { title: "Express", completed: false },
    { title: "Databases", completed: false },
    // Add more steps as necessary
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Backend Developer Roadmap
      </h1>
      <Roadmap steps={roadmapData} />
    </div>
  );
};

export default Backend;
