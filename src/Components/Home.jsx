import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='bg-[#1e293b]  w-full h-screen'>

    {/* Container For Name INFO */}
    <div className="max-w-[1000px] mx-auto px-8 py-[10rem] justiy-center h-full flex flex-col">

    <p className='text-pink-600 sm:text-4xl'>Hi, My name is</p>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ihtesham Khattak</h2>
    <p className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm Frontend developer</p>
    <p className='text-[#8892b0] py-4 max-w-[550px]'>Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text 
       ever since the 1500s, when an unknown printer took a galley of type
       and scrambled it to make a type specimen book.
    </p>

    <div>
      <button className=' group text-white border-2 px-6 py-2 my-2 flex font-bold justiy-between items-center hover:bg-pink-600 hover:border-pink-600' type='submit'> View Work 

        <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3' /> </span>

      </button>
    </div>
    </div>

   



    </div>
  )
}

export default Home