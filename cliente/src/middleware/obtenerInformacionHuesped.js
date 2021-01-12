import axios from 'axios'


export const obtenerInformacionHuesped = async (numeroHabitacion)=>{
   const resultado = await axios.get(`http://localhost:4000/api/checkIn/${numeroHabitacion}`)
   return resultado
}

export const obtenerConsumoHuesped = async (numeroHabitacion)=>{
   const resultado = await axios.get(`http://localhost:4000/api/consumoServ/${numeroHabitacion}`)
   return resultado
}