import axios from 'axios'
const base_url = process.env.REACT_APP_API_HOTEL

export const obtenerInformacionHuesped = async (numeroHabitacion)=>{
   const resultado = await axios.get(`${base_url}/checkIn/${numeroHabitacion}`)
   return resultado
}

export const obtenerConsumoHuesped = async (numeroHabitacion)=>{
   const resultado = await axios.get(`${base_url}/consumoServ/${numeroHabitacion}`)
   return resultado
}