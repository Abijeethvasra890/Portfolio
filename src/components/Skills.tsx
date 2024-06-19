import React from 'react'

const Skills = () => {
  return (
    <div className='md:w-[300px] md:min-h-[260px] p-5 bg-gray-900 rounded-2xl 
             bg-opacity-40 border-2 border-gray-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl'>
            <h4 className='text-white mb-5'>Tech Stack</h4>
            <div className='flex justify-around'>
              <img src='htmllogo.png' className='w-12 h-12'/>
              <img src='csslogo.png' className='w-12 h-12'/>
              <img src='tailwindlogo.png' className='w-12 h-12'/>
              <img src='reduxlogo.png' className='w-12 h-12'/>
            </div>
            <div className='flex justify-around mt-3'>
              <img src='jslogo.png' className='w-12 h-12'/>
              <img src='tslogo.jpg' className='w-12 h-12'/>
              <img src='postmanlogo.png' className='w-12 h-12'/>
              <img src='reactlogo.png' className='w-12 h-12'/>
            </div>
            <div className='flex justify-around mt-3'>
              <img src='tflogo.png' className='w-8 h-8'/>
              <img src='javalogo.png' className='w-8 h-8'/>
              <img src='firebaselogo.jpg' className='w-8 h-8'/>
              <img src='magentologo.png' className='w-8 h-8'/>
            </div>
            
    </div>
  )
}

export default Skills