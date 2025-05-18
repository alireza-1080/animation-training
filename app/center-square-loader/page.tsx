import React from "react";

const CenterSquareLoader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5">
      <div className="relative size-40">
        <div className="animate-move-out-1 absolute top-0 left-0 h-1/2 w-1/2 bg-gray-700"></div>
        <div className="animate-move-out-2 absolute top-0 right-0 h-1/2 w-1/2 bg-gray-700"></div>
        <div className="animate-move-out-3 absolute bottom-0 left-0 h-1/2 w-1/2 bg-gray-700"></div>
        <div className="animate-move-out-4 absolute right-0 bottom-0 h-1/2 w-1/2 bg-gray-700"></div>
      </div>
    </div>
  );
};

export default CenterSquareLoader;
