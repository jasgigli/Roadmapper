// src/pages/AIEngineer.jsx
import React from "react";
import Roadmap from "../../components/RoadmapCard";

const AIEngineer = () => {
  const roadmapData = [
    { title: "Deep Learning", completed: true },
    { title: "Natural Language Processing", completed: false },
    // Add more steps as necessary
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        AI Engineer Roadmap
      </h1>
      <Roadmap steps={roadmapData} />
    </div>
  );
};

export default AIEngineer;
