import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black flex justify-center gap-12 p-5'>
        <img src='abiheroimage.png' className='w-96   drop-shadow-custom-crimson rounded-full' />
        <div className='flex flex-col items-center justify-center'>
            <h1 className="text-white text-3xl">Hello I'm</h1>
            <h1 className="text-fuchsia-700  text-5xl font-bold">Abijeeth Vasra</h1>
            <h1 className="text-white text-3xl mt-1">Currently Learning Front End Tech</h1>
            <h1 className="text-zinc-400 text-xl mt-5">Aspiring to build interactive and user-friendly web applications.</h1>
            <h1 className="text-zinc-400 text-xl">Passionate about turning creative ideas into functional designs.</h1>
        </div>
        
    </div>
  )
}

export default Hero