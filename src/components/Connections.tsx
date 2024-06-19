import React from 'react'

const Connections = () => {
  return (
    <div className='flex items-center gap-2 p-2 bg-gray-900 rounded-2xl mt-[-15px]
             bg-opacity-90 border-2 border-gray-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl'>
            <a href='https://github.com/Abijeethvasra890'> <img src= "github_logo.png" className='w-12 h-8 transform transition-transform duration-500 hover:scale-105' /></a>
            <a href='https://www.linkedin.com/in/abijeeth-vasra/'><img src= "linkedin_logo.png" className='w-12 h-[45px] transform transition-transform duration-500 hover:scale-105' /></a>
            <a href='https://drive.google.com/file/d/1T1-0IJyo8gD0hUhS5vAPaGVnd0YEb2ij/view?usp=sharing'><img src= "resume_logo.png" className='w-12 transform transition-transform duration-500 hover:scale-105' /></a>
            {/* <h4 className='text-white font-semibold italic'>vasraabijeeth@gmail.com</h4> */}
    </div>
  )
}

export default Connections