import React from 'react'

const Technologies = () => {
  return (
    <div className='bg-black p-5 flex flex-col items-center'>
        <h1 className="text-white font-bold text-2xl mt-1">Technologies Known / Learning</h1>
        <div className='flex w-9/12 justify-around mt-10'>
            <img src='htmllogo.png' className='w-16 h-16'/>
            <img src='csslogo.png' className='w-16 h-16'/>
            <img src='jslogo.png' className='w-16 h-16'/>
            <img src='reactlogo.png' className='w-16 h-16'/>
            <img src='tailwindlogo.png' className='w-16 h-16'/>
        </div>
    </div>
  )
}

export default Technologies