const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieSession=require('cookie-session')
const passport=require('passport')
require('./passport')
const DB_URL = "mongodb://127.0.0.1:27017/memories";
const postRoute =require("./routes/postRoutes.js");
const authRoute =require("./routes/authRoute");


app.use(express.static('./public'))
app.use(express.json());

// connection to db
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((response)=>{console.log('database connected')})


app.use(
  cookieSession({ name: "session", keys: ["Abdulrehman"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders:['Content-Type', 'Authorization']
  })
);

app.use('/post',postRoute)
app.use('/auth',authRoute)
app.get('/',(req,res)=>{
  res.send('Welcome homepage')
})


app.listen(5000, () => {
  console.log("App is running on http://localhost:5000/");
});