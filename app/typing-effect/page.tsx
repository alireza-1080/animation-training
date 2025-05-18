import React from "react";

const TypingEffect = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-5">
      <div className="flex items-baseline">
        <h1 className="text-5xl text-nowrap sm:text-7xl md:text-9xl overflow-hidden animate-type-effect">
          Hello World!
        </h1>
        <span className="h-10 w-1 bg-orange-400 sm:w-1.5 md:w-2 animate-text-caret sm:h-14 md:h-24"></span>
      </div>
    </div>
  );
};

export default TypingEffect;