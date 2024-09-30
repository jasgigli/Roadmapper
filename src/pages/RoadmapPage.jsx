import React from "react";
import { useParams } from "react-router-dom";
import { useRoadmap } from "../context/RoadmapContext.jsx";

const RoadmapPage = () => {
  const { id } = useParams();
  const { roadmaps } = useRoadmap();
  const roadmap = roadmaps.find((r) => r.id === id);

  if (!roadmap) return <div>Roadmap not found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{roadmap.title}</h1>
      <div className="mt-4">
        <h2 className="text-xl">Roadmap Details:</h2>
        <p>{roadmap.details}</p>
      </div>
    </div>
  );
};

export default RoadmapPage;
