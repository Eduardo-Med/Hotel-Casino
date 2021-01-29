export const FETCH_AUTENTICACION_CAMBIAR = 'FETCH_AUTENTICACION_CAMBIAR'
//actions
export const fetchAutenticacionCambiar = (estado) =>{
    return {
        type: FETCH_AUTENTICACION_CAMBIAR,
        payload: estado
    }
}

//5ffe39c8d3e9d111006cf2e9
const fetchReservacion = (estado) =>{
    return (dispatch) => {
        dispatch(fetchAutenticacionCambiar(estado));
    }
}

export default fetchReservacion