const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// route
app.get("/form", (req, res)=>{
    res.sendFile(__dirname + "../public/index.html")
})

// app.get("/", (req, res)=>{
//     res.send("thanks form submitting")
// })
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})

