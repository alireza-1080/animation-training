import React from "react";

const WaveLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5">
      <div className="animate-grow-1 h-50 w-10 origin-center scale-y-20 rounded bg-indigo-700"></div>
      <div className="animate-grow-2 h-50 w-10 origin-center scale-y-20 rounded bg-indigo-700"></div>
      <div className="animate-grow-3 h-50 w-10 origin-center scale-y-20 rounded bg-indigo-700"></div>
      <div className="animate-grow-4 h-50 w-10 origin-center scale-y-20 rounded bg-indigo-700"></div>
      <div className="animate-grow-5 h-50 w-10 origin-center scale-y-20 rounded bg-indigo-700"></div>
    </div>
  );
};

export default WaveLoader;
