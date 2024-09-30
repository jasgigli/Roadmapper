import React, { createContext, useContext, useState, useEffect } from "react";
import { useFetchRoadmaps } from "../hooks/useFetchRoadmaps.jsx";

const RoadmapContext = createContext();

export const RoadmapProvider = ({ children }) => {
  const { roadmaps, loading, error } = useFetchRoadmaps();

  return (
    <RoadmapContext.Provider value={{ roadmaps, loading, error }}>
      {children}
    </RoadmapContext.Provider>
  );
};

export const useRoadmap = () => useContext(RoadmapContext);
