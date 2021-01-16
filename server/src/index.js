require('dotenv').config();

const app = require('./app');
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http, {cors: {origin: "https://hotel-casino.herokuapp.com/",methods: ["GET", "POST"]}});

require('./database');


io.on('connection', (socket) => {
    socket.on("conectar", (msg) => {
        io.emit("conectar", msg)
      });

    socket.on("actualizarHabs", (msg) => {
      io.emit("actualizarHabs",msg)
    });
});

  
async function main () {
    await http.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main()
