import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#011433] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1c5fa44d-34a1-4761-be9c-30497a747c2f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffde59] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an e-mail - pohanlu6@gmail.com</p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:border-[#ffde59] px-4 py-3 my-8 mx-auto flex items-center'>Sent</button>

        </form>

    </div>
  )
}

export default Contact