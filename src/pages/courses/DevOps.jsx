// src/pages/DevOps.jsx
import React from "react";
import Roadmap from "../../components/RoadmapCard";

const DevOps = () => {
  const roadmapData = [
    { title: "CI/CD", completed: true },
    { title: "Containerization", completed: true },
    { title: "Monitoring", completed: false },
    // Add more steps as necessary
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        DevOps Engineer Roadmap
      </h1>
      <Roadmap steps={roadmapData} />
    </div>
  );
};

export default DevOps;
