import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../ActionReducer.js/postSlice'

const Form = () => {
  let dispatch = useDispatch()
  const [formData, setformData] = useState({ creater: '', title: '', message: '', tags: [], selectedFile: '' })

  let handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData()
    data.append('creater', formData.creater)
    data.append('title', formData.title)
    data.append('message', formData.message)
    data.append('tags', formData.tags)
    data.append('selectedFile', formData.selectedFile)

    dispatch(createPost(data))
    setformData({ creater: '', title: '', message: '', tags: '', selectedFile: '' })

    //  setting empty all fields

    let inputs = document.querySelectorAll('input')
    inputs.forEach(item => {
      item.value = ''
    })
    document.querySelector('textarea').value = ''
  }

  // handling reset button
  const handleReset = () => {
    let inputs = document.querySelectorAll('input')
    inputs.forEach(item => {
      item.value = ''
    })
    document.querySelector('textarea').value = ''
  }


  return (
    <form onSubmit={handleSubmit} className=' px-1 max-w-md  flex justify-center flex-col items-center'>
      <h1 className='font-semibold text-base'>Add Memory</h1>
      <input className='border border-zinc-900 my-1 px-1 w-11/12' type="text" onChange={handleChange} name='creater' placeholder='Creater name...' required />
      <input className='border border-zinc-900 my-1 px-1 w-11/12' type="text" onChange={handleChange} name='title' placeholder='Title here...' required />
      <textarea className='border border-zinc-900 my-1 px-1 w-11/12' name="message" onChange={handleChange} id="" cols="20" rows="4" placeholder='Message here...' required></textarea>
      <input className='border border-zinc-900 my-1 px-1 w-11/12' type="text"onChange={handleChange}  name='tags' placeholder='tags...' required />
      <input type="file" className='my-1  w-11/12' name="selectedFile" id="" onChange={(e) => {
        setformData({ ...formData, [e.target.name]: e.target.files[0] })
        console.log(e.target.files[0])
      }} />
      <div className='my-2 px-3 self-start flex'>
        <button className='w-28 py-1 border border-orange-600 bg-orange-700 text-gray-50 font-semibold' type='submit'>Save</button>
        <button className='w-28 py-1 border border-zinc-500 ml-2 bg-orange-700 text-gray-50 font-semibold tracking-widest' type='reset' onClick={() => { handleReset() }}>Reset</button>
      </div>
    </form>
  )
}

export default Form