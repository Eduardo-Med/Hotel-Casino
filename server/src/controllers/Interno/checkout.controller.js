
const checkOutCtrl = {};

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');
const Habitacion = require('../../models/Habitacion');

//-------------------------CHECKOUT------------------------------------
//Find a client and rental with the number by room
checkOutCtrl.getClientAndRental = async(req, res) => {
    const room = await Habitacion.find({ "noCuarto": req.params.noRoom }, { "_id": 1 });
    const rental = await Alquiler.find({ "idHabitacion": room }, { "_id": 0 });
    await Cliente.populate(rental, { path: "idCliente" });
    res.status(200).send(rental);
}


//Delete Rental
checkOutCtrl.deleteRental = async(req,res) =>{
    await Alquiler.findByIdAndDelete(req.params.id);
    res.json({message:"Rental deleted"});
}

//--------------------------------------------------------------------

module.exports = checkOutCtrl;