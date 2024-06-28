import { db } from "./noticias.dao.mysql.js"
import { messages } from "./noticias.data.js"
import { adapters } from "./noticias.adapter.js"


const getNoticias = async (_, res) => {

        //  if (req.params.id === null){
        //     const result = await db.getNoticias()
        //     res.json(result)
        // }
        // else{
        //     const result = await db.getNoticia(req.params.id)
        //     res.json(result)
        // }
    
            //console.log("All Noticias")
            const result = await db.getNoticias()
            res.json(result)
       
}


const createNoticia= async (req, res) => {
    //console.log(req)
    const noticia = adapters.noticiaAdapter(req.body, req.file)
    const result = await db.createNoticia(noticia)
    result ? res.redirect('/') : res.redirect('/')
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
    //console.log("Una Noticia")
    const result = await db.getNoticia(req.params.id)
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