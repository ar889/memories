import React from 'react'
const MemoryCard = (props) => {
  const { _id, title, message, date, selectedFile } = props.data
  // simplifying date in function
  let simpleDate = () => {
                          let simpleDate = new Date(date).toDateString()
                          return simpleDate
                        }

  return (
    <div className='py-1'>
      <ul className='cursor-pointer'>
        <li onClick={() => { props.popup(props.data) }}><img className='w-11/12 block mx-auto' src={`http://localhost:5000/${selectedFile}`} alt="" /></li>
        <div className='flex flex-col items-start justify-center px-4'>
          <div onClick={() => { props.popup(props.data) }}>
            <li className='font-semibold text-sm'>{props.data.tags.map(tag => `#${tag} `)}</li>
            <li className='font-semibold text-lg'>{title}</li>
            <li>{message}</li>
            <li className='text-xs'><strong>Created on: </strong>{simpleDate()}</li>
          </div>
          <div>
            <button className='px-3 rounded  border border-zinc-500  bg-orange-700 text-gray-50 ' onClick={() => { props.editFunction(props.data) }}>Edit</button><button className='px-1 rounded border border-zinc-500 ml-2 bg-orange-700 text-gray-50' onClick={() => { props.deleteFunction(_id) }}>Delete</button>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default MemoryCard