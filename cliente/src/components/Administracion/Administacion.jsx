import React from 'react'
import "./admin.css"
import Contenido from './Contenido/Contenido'
import Menu from './Menu/Menu'

export default function Administacion() {
    return (
        <div className="admin-hotel">
            <Menu/>
            <Contenido/>
        </div>
    )
}
