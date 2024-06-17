import React from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const pro = [
        { title: 'AV Movies', techstack: 'TypeScript, SQL, TailWind', imglink: 'movie.jpg', link: 'https://movie-lemon-one.vercel.app/'},
        { title: 'Todo ', techstack: 'React, Firebase, Redux', imglink: 'todologo.png', link: 'https://todo-redux-sooty.vercel.app/' },
        { title: 'Pokemon Info', techstack: 'React, API, Chart JS', imglink: 'pokelogo.png', link: 'https://pokemon-app-redux-saga.vercel.app/' },
      ];
  return (
    <div className="flex flex-col items-center bg-gray-900 rounded-2xl 
    bg-opacity-40 border-2 border-gray-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
        <h1 className="text-white text-lg mt-2 mb-[-5px]">Projects</h1>
        <div className='flex flex-col md:flex-row gap-5 p-5'>
        {pro.map(project => (
          <ProjectCard 
            title={project.title} 
            techstack={project.techstack} 
            imglink={project.imglink}  
            projectLink={project.link}/>
          ))}
        </div>
    </div>
  )
}

export default Projects