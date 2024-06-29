import { db } from "./noticias.dao.mysql.js"
import { messages } from "./noticias.data.js"
import { adapters } from "./noticias.adapter.js"


const getNoticias = async (_, res) => {
            const result = await db.getNoticias()
            res.json(result)
       
}


const createNoticia= async (req, res) => {
    const noticia = adapters.noticiaAdapter(req.body, req.file)
    const result = await db.createNoticia(noticia)
    result ? res.redirect('/noticiasABM.html') : res.redirect('/noticiasABM.html')
}

// Atención al control de errores: Función síncrona
const incomplete = (req, res) => {
    throw Error(4)
}

/*
Atención al control de errores: Función Asíncrona 
necesita next, como si fuese un middleware
*/
const updateNoticia = async (req, res, next) => {
    const { id } = req.params
    const noticia = adapters.noticiaAdapter(req.body)
    const result = await db.updateNoticia(id, noticia)
    result.message === '0' ? res.json(messages.upd) : next(result)
}



const deleteNoticia = async (req, res, next) => {
    
    const result = await db.deleteNoticia(req.params.id)
    result.message === '0' ? res.json(messages.del) : next(result)
}

const getNoticia = async (req, res) => {
    
    const result = await db.getNoticia(req.params.id)
    console.log("vino Noticia",result)
    res.json(result)

}




export const controllers = {
    getNoticias,
    getNoticia,
    createNoticia,
    updateNoticia,
    deleteNoticia,
    incomplete
}