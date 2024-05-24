require("dotenv").config();
const express = require("express");

//express app
const app = express();

//port
const port = process.env.PORT || 4000;


//listen requestes

app.listen(port, () => {
    console.log(`backend server only port ${port}`); 
})