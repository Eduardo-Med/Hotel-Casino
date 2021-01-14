const Reservacion = require('../models/Reservacion');
const TipoHabitacion = require('../models/TipoHabitacion');

const validarFecha = async (fechaEntrada,fechaSalida,noHabSencilla,noHabDoble,noHabMatrimonial,noHabSuite)=>{
    let totalHabitacionesSencillas = 0
    let totalHabitacionesDobles = 0
    let totalHabitacionesMatrimonial = 0
    let totalHabitacionesSuit = 0
    const fechados = new Date(fechaEntrada);
    const newSaveDate = new Reservacion({fechaEntrada,fechaSalida,noHabSencilla,noHabDoble,noHabMatrimonial,noHabSuite});
    await newSaveDate.save();

    const reservacion = await Reservacion.find();
    const tipoHabitacion = await TipoHabitacion.find({},{'cantidad': 1,'_id':0});

    console.log('primero')
    console.log(tipoHabitacion[0])
    console.log(tipoHabitacion[0].cantidad)
    console.log(noHabSencilla)
    console.log(tipoHabitacion[0].cantidad - noHabSencilla)


    if(!reservacion.length){
        const newSaveDate = new Reservacion({fechaEntrada,fechaSalida});
        await newSaveDate.save();
    }else{
        reservacion.map((rev,index)=>{
            if(fechados.getTime() > rev.fechaSalida.getTime()){
                console.log(fechados.getTime())
                console.log(rev.fechaSalida.getTime())
                console.log('n1: ' + totalHabitacionesSencillas)
                console.log('n2: ' + rev.noHabSencilla)
                totalHabitacionesSencillas = totalHabitacionesSencillas + rev.noHabSencilla;
            }
        })
        console.log(totalHabitacionesSencillas)
    }

    console.log('segundo');   
    console.log(
        {numSencilla:(tipoHabitacion[0].cantidad + totalHabitacionesSencillas),numDobles:(tipoHabitacion[1].cantidad + totalHabitacionesDobles),
            numMatrimoniales:(tipoHabitacion[2].cantidad + totalHabitacionesMatrimonial),numSuit:(tipoHabitacion[3])}
     )


    await TipoHabitacion.replaceOne({"_id": '5ff53f7ef922680e0c313ee9'},
                                                        {'cantidad': (tipoHabitacion[0].cantidad - noHabSencilla),
                                                        'nombre': "Sencilla"
                                                        });


    const tipoHabitacion2 = await TipoHabitacion.find({},{'cantidad': 1,'_id':0});
    console.log('tercero');
    console.log(tipoHabitacion2[0])   
    console.log(totalHabitacionesSencillas)

}

module.exports = validarFecha;