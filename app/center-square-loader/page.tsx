import React from 'react'

const CenterSquareLoader = () => {
  return (
    <div className="w-full h-screen flex justify-center gap-5 items-center">
      <div className="size-40 relative">
        <div className="absolute w-1/2 h-1/2 top-0 left-0 bg-gray-700 animate-move-out-1"></div>
        <div className="absolute w-1/2 h-1/2 top-0 right-0  bg-gray-700 animate-move-out-2"></div>
        <div className="absolute w-1/2 h-1/2 bottom-0 left-0  bg-gray-700 animate-move-out-3"></div>
        <div className="absolute w-1/2 h-1/2 bottom-0 right-0 bg-gray-700 animate-move-out-4"></div>
      </div>
    </div>
  )
}

export default CenterSquareLoader
