const express = require('express');
const api = require('./routes/api');

const app = express();

// require ('./configs/dataBase')
// require('dotenv').config()

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
app.use(cors());

app.use('/server' , api);

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log('The server is listening')
});