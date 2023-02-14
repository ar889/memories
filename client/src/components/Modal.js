import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editMemory, updatePost } from '../ActionReducer.js/postSlice'

const Modal = (props) => {
    let { _id, creater, title, tags, message } = props.data
    const [editPost, seteditPost] = useState({ _id, creater, title, tags, message })
    let dispatch = useDispatch()
    let handleSubmit = () => {
        dispatch(updatePost(editPost))
        dispatch(editMemory({id:_id,data:editPost}))
        props.modalState({ state: false })
        let inputs = document.querySelectorAll('input')
        inputs.forEach(item => {
            item.value = ''
        })
        document.querySelector('textarea').value = ''
    }
    let handleChange = (e) => {
        seteditPost({ ...editPost, [e.target.name]: e.target.value })
    }
    let handleCancel = () => {
        props.modalState({ state: false })
    }


    return (
        <>
            {/* <!-- Main modal --> */}
            <div className='flex  items-center justify-center h-screen w-screen'>
                <div id="authentication-modal" className="bg-zinc-700 fixed top-0 h-screen w-screen opacity-80"></div>
                <div className="bg-green-700 fixed p-4 top-0  max-w-xs">
                    {/* <!-- Modal content --> */}
                    <h1 className='font-semibold text-base text-center'>Edit Memory</h1>
                    <input className='border border-zinc-900 my-1 px-1 w-11/12' type="text" name='creater' onChange={handleChange} value={editPost.creater} placeholder='Creater name...' required />
                    <input className='border border-zinc-900 my-1 px-1 w-11/12' type="text" name='title' onChange={handleChange} value={editPost.title} placeholder='Title here...' />
                    <textarea className='border border-zinc-900 my-1 px-1 w-11/12' name="message" id="" cols="20" rows="4" placeholder='Message here...' onChange={handleChange} value={editPost.message}></textarea>
                    <input className='border border-zinc-900 my-1 px-1 w-11/12' type="text" name='tags' onChange={handleChange} value={editPost.tags} placeholder='tags...' required />
                    <input type="file" className='my-1  w-11/12' name="selectedFile" id="" />
                    <div className='my-2 px-3 self-start flex'>
                        <button className='w-full py-1 border border-orange-600 bg-orange-700 text-gray-50 font-semibold' type='submit' onClick={handleSubmit}>Save</button>
                    </div>
                    <div className='my-2 px-3 self-start flex'>
                        <button className='w-full py-1 border border-orange-600 bg-orange-700 text-gray-50 font-semibold' type='submit' onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal