const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri)

// PARSING
app.use(bodyParser.json());



const port =  process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});