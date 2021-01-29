import React from 'react'
import "./admin.css"
import Contenido from './Contenido/Contenido'
import Menu from './Menu/Menu'
import fire from '../../config/Firebase'


export default function Administacion() {
    const handleLogOut = () =>{
        localStorage.clear();
        fire.auth().signOut();
        window.location.href = "/admin/login"
    };
    
    return (
        <div className="admin-hotel">
            <Menu/>
            <Contenido handleLogOut={handleLogOut}/>
        </div>
    )
}
