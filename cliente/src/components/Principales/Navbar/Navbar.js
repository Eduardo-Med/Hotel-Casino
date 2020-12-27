import React from 'react'
import logo from '../../../images/Logo.png'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} style={{width:"50px", height:"50px"}} alt=""/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse opciones" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#Inicio">Inicio
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Habitacion">Habitaciones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Restaurante">Restaurante</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Spa">Spa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Casino">Casino</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Eventos">Eventos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Alberca">Alberca</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
