import React, {useState} from 'react'
import OpcionMenu from './OpcionMenu'
import logo from '../../../images/Logo.png'
import './menu.css'
import Reservaciones from '../../../images/reservaciones-menu.jfif'
import Eventos from '../../../images/Eventos-menu.jpg'
import Casino from '../../../images/casino-menu.jfif'
import Restaurante from '../../../images/restaurante-menu.jpg'
import Spa from '../../../images/spa-menu.jpg'
import Alberca from '../../../images/alberca.jpg'
import Promociones from '../../../images/promocion-menu.jpg'

export default function Menu() {
    const [oculatarMenu, setOcultarMenu] = useState(true)
    return (
        <div className="menu">
            <div className="logo-admin mb-3"><img src={logo} alt=""/></div>
            <div className="mobile-menu" onClick={()=>setOcultarMenu(!oculatarMenu)}>
                <h1>Menu</h1>
                <i className={`fas fa-caret-square-down fa-2x ml-5 ${oculatarMenu ? 'mobile-menu-boton1' : 'mobile-menu-boton2' }`}></i>
            </div>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_RESERVACION_MENU_ADMIN} nombre="Reservaciones" imagen={Reservaciones}/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_EVENTOS_MENU_ADMIN} nombre="Eventos" imagen={Eventos}/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_CASINO_MENU_ADMIN} nombre="Casino" imagen={Casino}/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_RESTAURANTE_MENU_ADMIN} nombre="Restaurante" imagen={Restaurante}/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_SPA_MENU_ADMIN} nombre="Spa" imagen={Spa}/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_ALBERCA_MENU_ADMIN} nombre="Alberca Y Snack" imagen={Alberca}/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'} link={process.env.REACT_APP_PROMOCIONES_MENU_ADMIN} nombre="Promociones" imagen={Promociones}/>
        </div>
    )
}
