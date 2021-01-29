import React, {useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import fire from '../../config/Firebase'

import "./admin.css"
import Login from './Login/Login'

export default function PaginaLogin() {
    const [usuario, setUsuario] = useState("")
    const [usuarioValidado, setUsuarioValidado,] = useState("")
    const [contra, setContra] = useState("")
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()


    const handleLogin = () =>{
        fire
            .auth()
            .signInWithEmailAndPassword((usuario + "@hotelcasino.es"), contra)
            .catch((err) => {
                switch (err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError('El usuario es incorrecto o no Existe');
                        localStorage.setItem('userhcp', false);
                        break
                    case "auth/wrong-password":
                        setPasswordError('La contraseña es incorrecta');
                        localStorage.setItem('userhcp', false);
                        break
                    default: break
                }
            })
    }


    const authListener = () => {
        fire.auth().onAuthStateChanged((usuarioValidado) => {
            if(usuarioValidado){
                setUsuarioValidado(usuarioValidado)
                localStorage.setItem('userhcp', true);
            }else{
                setUsuarioValidado("")
            }
        })
    }

    useEffect(() => {
        authListener();
         // eslint-disable-next-line
    })


    return (
        <div className="admin-hotel">
        {usuarioValidado ? (
             <Redirect to={'/admin'} />
        ):(
            <Login
            usuario={usuario}
            setUsuario={setUsuario}
            contra={contra}
            setContra={setContra}
            handleLogin={handleLogin}
            emailError={emailError}
            passwordError={passwordError}
            />   
        )
        }
        </div>
    )
}