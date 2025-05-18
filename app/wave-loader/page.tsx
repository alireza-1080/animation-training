import React from 'react'

const WaveLoader = () => {
  return (
    <div className='w-full h-screen flex justify-center gap-5 items-center'>
        <div className='w-10 h-50 origin-center bg-indigo-700 rounded scale-y-20 animate-grow-1'></div>
        <div className='w-10 h-50 origin-center bg-indigo-700 rounded scale-y-20 animate-grow-2'></div>
        <div className='w-10 h-50 origin-center bg-indigo-700 rounded scale-y-20 animate-grow-3'></div>
        <div className='w-10 h-50 origin-center bg-indigo-700 rounded scale-y-20 animate-grow-4'></div>
        <div className='w-10 h-50 origin-center bg-indigo-700 rounded scale-y-20 animate-grow-5'></div>
    </div>
  )
}

export default WaveLoader