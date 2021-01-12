import React from 'react'

export default function Actividades({nombre, precio,detalles,fecha}) {
    return (
    <div className="d-flex flex-column mb-2">
        <div><strong>Servicio: </strong><br/>{nombre}</div>
        <div><strong>Detalles: </strong><br/>{detalles}</div>
        <div><strong>Fecha: </strong><br/>{fecha.substr(0,10)}</div>
        <div><strong>Precio: </strong>${precio}</div>
    </div>
    )
}
