"use strict";
require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json());

app.get('/hello',function (req,res) {
    res.send('hello world')
})

app.listen(process.env.port);