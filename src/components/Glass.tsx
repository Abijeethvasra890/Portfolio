import Skills from './Skills'
import Intro from './Intro'
import Projects from './Projects'
import Experience from './Experience'
import Timeline from './Timeline'


const Glass = () => {
  return (
    <div className='flex justify-center p-10 sm:p-10 bg-cover bg-center min-h-screen'
    style={{
        backgroundImage: 'url(https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg)',
    }}>
    
        <div className='p-5 bg-slate-950 rounded-2xl bg-clip-padding 
            backdrop-filter backdrop-blur-lg bg-opacity-30 border-2 border-gray-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl'>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-gray-100'>Hi</p>
                            <h1 className="text-white text-2xl font-bold mb-2">I'm Abijeeth Vasra</h1>
                        </div>
                        <div>
                            <img src='abiheroimage.png' className='w-14 drop-shadow-custom-crimson rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center gap-5'>
                        <div><Intro /></div>
                        <div><Skills /></div>
                        <div><Timeline /></div>
                        
                    </div>
                    <div className='flex flex-col md:flex-row justify-center gap-5 mt-5'>
                       <div><Projects /></div>
                       <div><Experience /></div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Glass