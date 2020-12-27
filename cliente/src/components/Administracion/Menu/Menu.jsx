import React, {useState} from 'react'
import OpcionMenu from './OpcionMenu'
import logo from '../../../images/Logo.png'

export default function Menu() {
    const [oculatarMenu, setOcultarMenu] = useState(true)
    return (
        <div className="menu">
            <div className="logo-admin mb-3"><img src={logo} alt=""/></div>
            <div className="mobile-menu" onClick={()=>setOcultarMenu(!oculatarMenu)}>
                <h1>Menu</h1>
                <i className={`fas fa-caret-square-down fa-2x ml-5 ${oculatarMenu ? 'mobile-menu-boton1' : 'mobile-menu-boton2' }`}></i>
            </div>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Reservaciones" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyyGQn_cEqbGDfmqrpvslZdVVDXUklSW9DA&usqp=CAU"/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Eventos" imagen="https://www.alcalaruiz.com/galeria_files/hotel_maria_isabel_sheraton/03.jpg"/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Casino" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnW1wSQobubozPPsilUDO3HvE7kEFzXFcdHA&usqp=CAU"/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Restaurante" imagen="https://villagrouploreto.s3.amazonaws.com/uploads/restaurant/cover/50/optimizada_main-hotel-santafe-restaurante-casa-mia.jpg"/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Spa" imagen="https://image.freepik.com/foto-gratis/decoracion-spa-velas-encendidas-toallas_23-2148268445.jpg"/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Alberca Y Snack" imagen="https://www.hotelmariadelcarmen.com.mx/media/imgs/hotel-maria-del-carmen-contentmaria-alberca3.jpg"/>
            <OpcionMenu opcion={oculatarMenu ? 'mobile-opcion-activado' : 'mobile-opcion-desactivado'}nombre="Promociones" imagen="https://franciscotorreblanca.es/wp-content/uploads/2017/04/cupones-descuento-estrategia-marketing.jpg"/>
        </div>
    )
}
