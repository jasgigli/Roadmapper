import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500" />
      <span className="text-yellow-500 text-xl ml-4">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
