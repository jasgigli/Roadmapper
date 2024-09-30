// src/pages/DataScience.jsx
import React from "react";
import Roadmap from "../../components/RoadmapCard";

const DataScience = () => {
  const roadmapData = [
    { title: "Python", completed: true },
    { title: "Statistics", completed: false },
    { title: "Machine Learning", completed: false },
    // Add more steps as necessary
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Data Scientist Roadmap
      </h1>
      <Roadmap steps={roadmapData} />
    </div>
  );
};

export default DataScience;
