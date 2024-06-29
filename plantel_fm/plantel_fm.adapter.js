import Plantel_FM from "../models/Plantel_FM.js"

const plantel_fmAdapter = (data, file = '') => {

    if (file !== '')
        file = './uploads/' + file.filename

    let { nombre, apellido, pos } = data

    const plantel_fm = new Plantel_FM(nombre, apellido, pos,file)
    
    return plantel_fm
}


export const adapters = {
    plantel_fmAdapter
}