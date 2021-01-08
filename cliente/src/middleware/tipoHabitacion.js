export const verTipoHabitacion =(idTipo)=>{
    switch(idTipo){
        case '5ff53f7ef922680e0c313ee9':
            return 'Sencilla'
        case '5ff53f88f922680e0c313eea':
            return 'Doble'
        case '5ff53f8ff922680e0c313eeb':
            return 'Matrimonial'
        case '5ff53f97f922680e0c313eec':
            return 'Suite'
        default: return ''
    }
}