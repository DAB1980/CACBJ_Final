import Socio from "../models/Socio.js"


const parseSocio = (data) => {
    const { nombre, apellido, mail, activo, fecha_alta, fecha_baja } = data
    const socio = new User(nombre, apellido, mail, activo, fecha_alta, fecha_baja )
    return socio
}



export const adapters = {
    parseSocio
}