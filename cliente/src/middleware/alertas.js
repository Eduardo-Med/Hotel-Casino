import swal from 'sweetalert';

export const alerta = (title,text, icon,button) =>{
swal({
    title,
    text,
    icon,
    button
})
}