const mongoose = require("mongoose");

let postSchema =new mongoose.Schema({
googleId:Number,
creater:String,
title:String,
message:String,
tags:[String],
selectedFile:String,
date:{
    type:Date,
    default:new Date()
}
})

let Schema = mongoose.model('post',postSchema);
module.exports= Schema