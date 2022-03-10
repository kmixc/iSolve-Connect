//To start the Application, go to cd frontend and npm start through there
//package json in frontend starts both server.js and React

const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')




app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://iSolve:Capstone2022@capstone.ksz4j.mongodb.net/myFirstDatabase');

app.use("/",require("./router/companyRouter"))



app.listen(8082, () => { console.log('Server is running...')});
