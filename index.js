const express = require('express');
const req = require('express/lib/request');
const app = express();

const PORT = 3000;

app.get('/' , (req,res) =>{
    res.send("hello world")
})



app.listen(PORT, () =>{
    console.log("Server is running")
})
