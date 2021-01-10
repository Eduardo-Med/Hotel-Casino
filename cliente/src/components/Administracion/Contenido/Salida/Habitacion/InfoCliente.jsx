import React from 'react'

export default function InfoCliente({noReservacion,nombre,tipoHabitacion,fechaRegistro,fechaSalida,numeroPersonas}) {
    return (
        <div className="info-huesped">
            <h4 className="titulo-informacion-huesped"><strong>Informacion del Huesped</strong></h4>
            <h5><strong>Numero de Reservacion: </strong><br/>{noReservacion}</h5>
            <h5><strong>Nombre: </strong><br/>{nombre}</h5>
            <h5><strong>Tipo De Habitacion: </strong><br/>{tipoHabitacion}</h5>
            <h5><strong>Fecha de registro: </strong><br/>{fechaRegistro}</h5>
            <h5><strong>Fecha de Salida:</strong><br/>{fechaSalida}</h5>
            <h5><strong>Numero de personas: </strong>{numeroPersonas}</h5>
        </div>
    )
}
