import React from 'react'

const PostPopup = (props) => {
    let { tags,title,message,date} =props.data
    let simpleDate=()=>{
        let simpleDate = new Date(date).toDateString()
        return simpleDate
          }
    return (
        <div className='flex  items-center justify-center h-screen w-screen'>
            <div id="authentication-modal" className="bg-zinc-700 fixed top-0 h-screen w-screen opacity-80"></div>
            {/* Popup content */}
            <div className="bg-sky-700 fixed p-4 top-0  max-w-md">
                <ul>
                    <li></li>
                    <li className='text-amber-300'>Tags:</li>

                    <li className='text-white'>{tags}</li>
                    <li className='text-amber-300'>Title:</li>

                    <li className='text-white'>{title}</li>
                    <li className='text-amber-300'>Message:</li>

                    <li className='text-white'>{message}</li>
                    <li ><strong className='text-amber-300'>Created on: </strong><span className='text-lime-300'>{simpleDate()}</span></li>
                    <button className='w-20 py-1 border border-zinc-500 bg-orange-700 text-gray-50' onClick={()=>{props.popupState({state:false})}}>Go back</button>
                </ul>
            </div>
        </div>
    )
}

export default PostPopup