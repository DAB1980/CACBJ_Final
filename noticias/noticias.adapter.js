import Noticia from "../models/Noticia.js"

const noticiaAdapter = (data, file = '') => {

    if (file !== '')
        file = './uploads/' + file.filename

    let { title, subtitle, date, category, content } = data

    const noticia = new Noticia(title, subtitle, date, category, content,file)
    
    return noticia
}


export const adapters = {
    noticiaAdapter
}