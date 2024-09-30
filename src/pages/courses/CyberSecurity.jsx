// src/pages/courses/CyberSecurity.jsx
import React from "react";
import RoadmapCard from "../../components/RoadmapCard"; // Adjusted import path

const CyberSecurity = () => {
  const roadmapData = [
    { title: "Networking", completed: true },
    { title: "Security Fundamentals", completed: false },
    // Add more steps as necessary
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Cyber Security Roadmap
      </h1>
      {roadmapData.map((step, index) => (
        <RoadmapCard
          key={index}
          title={step.title}
          completed={step.completed}
        />
      ))}
    </div>
  );
};

export default CyberSecurity;
