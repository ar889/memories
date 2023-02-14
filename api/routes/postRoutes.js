const express = require("express");
const postSchema = require('../models/post.js')
const router = express.Router()
const upload = require('../multer/multerSetup.js')

// Route to get posts http://localhost:5000/post/getpost

router.get('/getpost', async (req, res) => {
    if(req.user){
        let posts = await postSchema.find({googleId:req.user.id})
        res.json(posts)
    }else{
        res.json({posts:false})
    }
})

// Route to create posts http://localhost:5000/post/createpost

router.post('/createpost', upload.single('selectedFile'), async (req, res) => {
    const googleId = req.user.id
    let selectedFile= `images/${req.file.filename}`
    let { creater, title, message, tags } = req.body
    tags=tags.split(',')
    let newPost = await postSchema.create({
       googleId, creater, title, message, tags, selectedFile
    })
    res.json(newPost)
})

// Route to update posts http://localhost:5000/post/updatePost/456

router.put('/updatePost/:id', async (req, res) => {
    let data = req.body
    data.tags=data.tags.toString()
    data.tags =data.tags.split(',')
    let id = req.params.id
    let insertedData = await postSchema.findByIdAndUpdate(id, data, { new: true })
    res.json(insertedData)
})

// Route to delete posts http://localhost:5000/post/deletePost/456

router.delete('/deletePost/:id', async (req, res) => {
    let id = req.params.id

    await postSchema.findByIdAndDelete(id);
    res.json('Deleted successfully.');
})

module.exports=router