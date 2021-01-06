const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const checkIn = require('./routes/Interno/checkIn')

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json({limit: '300kb'}));

//routes
app.use('/api/checkIn', checkIn);

module.exports = app;