import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='bg-black text-zinc-200 p-5 '>
        <div className='md:ml-20'>
            <h1 className="text-white text-2xl font-bold">Contact</h1>
            <h1 className="text-zinc-400 text-xl mt-10">Aspiring to build interactive and user-friendly web applications.</h1>
            <h1 className="text-zinc-400 text-xl">Passionate about turning creative ideas into functional designs.</h1>
            <div className="flex items-center mt-5">
            <FontAwesomeIcon icon={faEnvelope} className="text-white w-4 mr-2" />
                <h1 className="text-white text-xl">vasraabijeeth@gmail.com</h1>
            </div>
            <FontAwesomeIcon icon={faLinkedin} className="text-white w-5 mr-2 mt-5" />
         </div>
    </div>
  )
}

export default Contact