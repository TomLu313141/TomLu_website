import React from 'react'
import Photo2 from '../assets/photo2.JPG'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#011433] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ffde59] text-gray-300'> About</p>
                    <br />
                    <br />
                    <p className='text-2xl font-bold'>Hi. I'm TomLu</p>
                    <br />
                    <p>I have participated in various extracurricular activities,</p>
                    <p>such as the Alumni Association, Pop Dance Club.</p>
                    <p>Therefore, self-discipline is key to time management.</p>
                    <br />
                    <p>I have also participated in lots competition like Hult prize and Hackathon.</p>
                    <p>To realize ideas, I must combine the knowledge from classroom and study by my own.</p>
                    <br />
                    <p>Being a team-player,</p>
                    <p>I used my speciality of coding to assist partners,</p>
                    <p>letting them solve the problems more smoothly, which gives me valuable learning experience, either.</p>
                </div>
                <div>
                    <img src={Photo2} alt="photo" />
                    <p className='sm:text-right pb-2  text-3xl'>3 words about me </p>
                    <p className='sm:text-right pb-2  text-xl text-[#ffde59]'> # energetic</p>
                    <p className='sm:text-right pb-2  text-xl text-[#ffde59]'> # active</p>
                    <p className='sm:text-right pb-2  text-xl text-[#ffde59]'> # self-discipline</p>
                </div>    
                
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                </div>
                <div>
                    <p></p>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default About