import React from "react";

const ClockSpinner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5">
      <div className='after:animate-second-counter before:animate-minute-counter relative size-60 rounded-full border-8 before:absolute before:bottom-1/2 before:left-1/2 before:h-[30%] before:w-1.5 before:origin-bottom before:rounded-t-full border-gray-700 before:bg-blue-500 after:bg-indigo-500 before:content-[""] after:absolute after:bottom-1/2 after:left-1/2 after:h-5/12 after:w-1.5 after:origin-bottom after:rounded-t-full after:content-[""]'></div>
    </div>
  );
};

export default ClockSpinner;
