import { useEffect, useState } from "react";

export const useFetchRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/roadmaps.json");
        if (!response.ok) {
          throw new Error("Failed to fetch roadmaps: " + response.statusText);
        }
        const data = await response.json();
        setRoadmaps(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { roadmaps, loading, error };
};
