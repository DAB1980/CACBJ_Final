import Provincia from "../models/Provincia.js"


const parseProvincia = (data) => {
   
    const { nombre } = data
    const provincia = new Provincia(nombre)
    return provincia
}



export const adapters = {
    parseProvincia
}