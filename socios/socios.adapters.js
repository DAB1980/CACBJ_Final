import Socio from "../models/Socio.js"


const parseSocio = (data) => {
    const { nombre, apellido, mail, idprovincia, activo, fecha_alta, fecha_baja } = data
    
    const socio = new Socio(nombre, apellido, mail, idprovincia, activo, fecha_alta, fecha_baja )
    return socio
}



export const adapters = {
    parseSocio
}