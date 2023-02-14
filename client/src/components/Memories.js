import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, fetchPost, filterArray } from '../ActionReducer.js/postSlice'
import MemoryCard from './MemoryCard'
import Modal from './Modal'
import Spinner from './Spinner'
import PostPopup from './PostPopup'

const Memories = () => {
  const [spinner, setspinner] = useState(true)
  const [modal, setmodal] = useState({ state: false, data: {} })
  const [popup, setpopup] = useState({ state: false, data: {} })
  let post = useSelector((state) => state.post)
  let dispatch = useDispatch()


  useEffect(() => {
    setspinner(true)
    dispatch(fetchPost())
    if(post){
      setspinner(false)

    }
    // eslint-disable-next-line
  }, [])

  // process of editing a memory

  const handleEdit = (postData) => {
    setmodal({ state: true, data: postData })
    dispatch(fetchPost())
  }
    // process of deleting a memory

  const handleDelete = (id) => {
    dispatch(deletePost(id))
    dispatch(filterArray(id))
  }

  // Post popup

  const Popup = (data) => {
    setpopup({state:true, data })
  }

  return (
    <>
      {/* modal for editing */}
      {modal.state && <Modal data={modal.data} modalState={setmodal} />}
      {/* spinner */}
      {spinner && <Spinner />}
      {/* popup for post */}
      {popup.state && <PostPopup data={popup.data} popupState={setpopup}/>}
      {post.loading && <div>loading...</div>}
      {!post.loading && post.error ? <div>Error:{post.error}</div> : null}
      {!post.loading && post.posts.length ? (
        <div className='grid xs:grid-cols-2 lg:grid-cols-3'>
          {post?.posts.map((user) => (
            <MemoryCard key={user._id} data={user} editFunction={handleEdit} deleteFunction={handleDelete} popup={Popup} />
          ))}
        </div>
      ) : null}

    </>
  )
}

export default Memories