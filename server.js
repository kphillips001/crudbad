const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//app.use('/question', require('./routes/Question'))
app.use('/user', require('./routes/User'));
 

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on ${PORT}`.yellow.bold) )
