import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    posts: [],
    error: ''
}
export const fetchPost = createAsyncThunk('post/fetchPost', async() => {
    // return axios.get('http://localhost:5000/post/getpost').then(response => response.data)


    const res = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API}/post/getpost`,
        withCredentials:true,
      });
    return res.data;

})
export const createPost = createAsyncThunk('post/createPost', async(data) => {
    // return axios.post('http://localhost:5000/post/createpost', data).then(response => response.data)


    const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API}/post/createpost`,
        withCredentials:true,
        data:data
      });
    return res.data;
})
export const updatePost = createAsyncThunk('post/updatePost', async(data) => {
    // return axios.put(`http://localhost:5000/post/updatePost/${data._id}`, data).then(response => response.data)
    const res = await axios({
        method: 'put',
        url: `${process.env.REACT_APP_API}/post/updatePost/${data._id}`,
        withCredentials:true,
        data:data
      });
    return res.data;


})
export const deletePost = createAsyncThunk('post/deletePost', async(id) => {
    
     const res = await axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API}/post/deletePost/${id}`,
        withCredentials:true
      });
    return id
})

export const counterSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        filterArray:(state,action)=>{
            state.posts=state.posts.filter(item=>item._id!==action.payload)
        },
        editMemory:(state,action)=>{
state.posts=state.posts.filter(item=> item._id===action.payload.id?item=action.payload.data:item)
        }
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchPost.pending, (state) => {
        //     state.loading = true
        // })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
        })
        // builder.addCase(fetchPost.rejected,(state,action)=>{
        //     state.loading=false
        //     state.posts=[]
        //     state.error=action.error.message
        // })
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
        builder.addCase(updatePost.fulfilled, (state, action) => {
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
        })
    }
})

// Action creators are generated for each case reducer function
export const { filterArray,editMemory} = counterSlice.actions
export default counterSlice.reducer