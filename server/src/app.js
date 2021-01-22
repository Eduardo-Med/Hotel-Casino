const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const checkIn = require('./routes/Interno/checkIn');
const checkOut = require('./routes/Interno/checkOut');
const tipoHabitacion = require('./routes/Interno/tipoHabitacion');
const habitacion = require('./routes/Interno/habitacion');
const consumoServ = require('./routes/Interno/consumoServ');
const consumoTotal = require('./routes/Interno/consumoTotal');
const cuartoOcupado = require('./routes/Externo/cuartoOcupado');
const reservacion = require('./routes/Externo/reservacion');
const conexionBanco = require('./routes/Externo/conexionBanco');

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json({ limit: '300kb' }));

//routes
//Internal
app.use('/api/checkIn', checkIn);
app.use('/api/checkOut', checkOut);
app.use('/api/tipoHabitacion', tipoHabitacion);
app.use('/api/habitacion', habitacion);
app.use('/api/consumoServ', consumoServ);
app.use('/api/consumoTotal', consumoTotal);

//External
app.use('/api/cuartoOcupado', cuartoOcupado);
app.use('/api/reservacion', reservacion);
app.use('/api/bankith', conexionBanco);

module.exports = app;