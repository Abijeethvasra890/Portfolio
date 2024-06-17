import React from 'react'

type props =  {
    title: string,
    techstack: string,
    imglink: string,
    projectLink: string
}

const ProjectCard = ({title, techstack, imglink, projectLink}: props) => {
  return (
    <a
      href={projectLink}
      className="md:max-h-[200px] flex flex-col items-center p-5 bg-gray-900 rounded-2xl 
      bg-opacity-40 border-2 border-gray-500 transform transition-transform 
      duration-500 hover:scale-105 hover:shadow-3xl"
    >
        <p className='text-white font-semibold'>{title}</p>
        <p className='text-white italic'>{techstack}</p>
        <img src={imglink} className='w-20 h-20 mt-2'/>
    </a>
  )
}

export default ProjectCard