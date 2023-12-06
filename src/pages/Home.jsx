import React from 'react'
import images from '../components/images'

const Home = () => {
  return (
    <div  name="home" style={{backgroundImage:`url(${images.bg_home})`,backgroundSize:'cover'}} className='h-screen' >
      <div className='mx-auto flex flex-col items-center justify-center h-full px-4 '>
          <div className='mx-auto text-center'>
          <p className='text-green-200 text-sm md:text-2xl sm:text-xl p-2'>The HOME of</p>
              <h1 className='subpixel-antialiased text-green-900 text-4xl font-bold md:text-6xl  sm:text-5xl text'>INTELLIGENT TRANSCRIBING</h1>
              <p className='text-white text-sm md:text-2xl sm:text-xl p-2 md:mx-[200px]'>Hi, we're IQScribe transcription services industry as provider of the most affordable quality transcription service recognized for outstanding customer service.</p>
      </div>
    </div>
    </div>
   )
}

export default Home
