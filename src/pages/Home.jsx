import React from "react";
import { useRoadmap } from "../context/RoadmapContext.jsx";
import RoadmapCard from "../components/RoadmapCard.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const Home = () => {
  const { roadmaps, loading, error } = useRoadmap();

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-red-400 text-lg text-center">Error: {error}</div>
    );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex flex-col text-white">
      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-b-lg shadow-lg">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Discover Your Learning Journey
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Explore diverse tech roles and find your personalized roadmap to
          success! Click on any card below to get started.
        </p>
        <a
          href="#roadmap-cards"
          className="bg-gray-900 text-yellow-500 font-semibold py-2 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Explore Roadmaps
        </a>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto text-center py-12">
        <h2 className="text-4xl font-semibold mb-6">Why Choose Roadmapper?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Comprehensive Roadmaps",
            "Community Support",
            "Regular Updates",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {feature}
              </h3>
              <p className="text-gray-300">
                Get detailed roadmaps tailored for various tech roles, ensuring
                you stay on track.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Cards Section */}
      <section id="roadmap-cards" className="flex-grow py-12">
        <h2 className="text-4xl font-semibold text-center mb-6">
          Explore Our Roadmaps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {roadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-12 text-center">
        <h2 className="text-4xl font-semibold text-yellow-400 mb-6">
          What Our Users Say
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 italic mb-4">
            “Roadmapper helped me find the perfect path to become a full-stack
            developer. The roadmaps are detailed and easy to follow!”
          </p>
          <p className="text-lg text-gray-300 italic">– Alex Johnson</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
