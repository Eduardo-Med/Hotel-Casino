import React from 'react'

export default function Actividades({nombre, precio}) {
    return (
    <div className="d-flex flex-column">
        <div><strong>Actividad: </strong><br/>{nombre}</div>
        <div><strong>Precio: </strong>${precio}</div>
    </div>
    )
}
