import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#011433]'>

        {/* Containers */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <h1 className=' text-4xl text-[#ffde59]'>Hi, my name is</h1>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            TomLu
          <br/></h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>
            A junior Software Developer
          </h2>

          <h1></h1>
          
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          A student majoring in Computer Science and Bio-medical Engineering in NCKU CCEP 
          <br />
          <br/>
          Nice to meet U 😆
          </p>

          <div>
          <button className='text-[#ffde59] group border-2 px-6 py-3 my-2 flex items-center hover:border-[#ffde59]'> 
            <Link to='about' smooth={true} duration={500}>View more ...</Link>
          </button>
          </div>

        </div>

    </div>
  )
}

export default Home