import React from 'react'

import './login.css'
import logo from '../../../images/Logo.png'

export default function Login({usuario,setUsuario,contra,setContra,handleLogin,emailError,passwordError}) {
    const inciar =()=>{
        handleLogin()
        localStorage.setItem('userhcp', true);
    }
    return (
        <div className="login">
            <div className="caja-login effect2">
                <div className="img-container text-center mb-3">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="input-contenido margin-login">
                    <label htmlFor="">Nombre de usuario</label>
                    <input
                    className="form-control"
                    type="text"
                    autoFocus
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    autoComplete={'off'}
                    required
                    />
                    <label htmlFor="" style={{color: 'red'}}>{emailError}</label>
                </div>
                <div className="input-contenido margin-login">
                    <label htmlFor="">Contraseña</label>
                    <input
                    className="form-control"
                    type="password"  
                    value={contra}
                    onChange={e => setContra(e.target.value)}
                    autoComplete={'off'}
                    required
                    />
                    <label htmlFor="" style={{color: 'red'}}>{passwordError}</label>
                </div>
                <button className="btn btn-success btn-block mt-3" onClick={()=> inciar()} type="submit" >Acceder</button>
            </div>
        </div>
    )
}
