import React from "react";
import { Link } from "react-router-dom";

const RoadmapCard = ({ roadmap }) => {
  // Use an empty array as a fallback if skills is undefined
  const skills = roadmap.skills || [];

  return (
    <Link
      to={`/roadmap/${roadmap.id}`}
      className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="p-6 transition-colors duration-300 group-hover:bg-gray-700">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
          {roadmap.title}
        </h2>
        <p className="text-gray-300 mb-4">{roadmap.description}</p>
        <button className="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-200 shadow-md transform hover:scale-105">
          View Roadmap
        </button>
      </div>
      <div className="p-4 border-t border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-gray-400">
          Skills Included: {skills.join(", ") || "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default RoadmapCard;
