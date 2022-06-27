const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(require('./route/game'))




app.listen(port  , ()=>{
console.log(`Successfully connected to ${port}`)
})