import React from 'react'

export default function InfoCliente({noReservacion,nombre,tipoHabitacion,fechaRegistro,fechaSalida,numeroPersonas,correo,telefono}) {
    return (
        <div className="info-huesped">
            <h4 className="titulo-informacion-huesped"><strong>Informacion del Huesped</strong></h4>
            <h6><strong>Numero de Reservacion: </strong><br/>{noReservacion}</h6>
            <h6><strong>Nombre: </strong><br/>{nombre}</h6>
            <h6><strong>Tipo De Habitacion: </strong><br/>{tipoHabitacion}</h6>
            <h6><strong>Fecha de registro: </strong><br/>{fechaRegistro.substr(0,10)}</h6>
            <h6><strong>Fecha de Salida:</strong><br/>{fechaSalida.substr(0,10)}</h6>
            <h6><strong>Numero de personas: </strong>{numeroPersonas}</h6>
            <h6><strong>Correo: </strong>{correo}</h6>
            <h6><strong>Telefono: </strong>{telefono}</h6>
        </div> 
    )
}
