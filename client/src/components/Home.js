import React from 'react'
import Form from './Form'
import Memories from './Memories'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center my-2'>
       <span className='text-3xl my-6'>YOUR MEMORIES</span>
    </div>
    <div className='grid sm:grid-cols-3 gap-1'>
   <div className='flex justify-center items-start'> <Form/></div>
      <div className='sm:col-span-2 sm:row-start-1'><Memories/></div>
    </div>
    </>
  )
}

export default Home