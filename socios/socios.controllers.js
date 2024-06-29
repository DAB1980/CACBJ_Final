import { db } from "./socios.dao.mysql.js"
import { adapters } from '../socios/socios.adapters.js'


const getSocios = async (_, res) => {
    const result = await db.getSocios()
    res.json(result)
}

const getSocio = async (req, res) => {
    const { id } = req.params
    const result = await db.getSocio(id)
    res.json(result)
}


const createSocio = async (req, res) => {
    const socio = adapters.parseSocio(req.body)
    const result = await db.createSocio(socio)
    result ? res.redirect('/sociosABM.html') : res.redirect('/sociosABM.html')
  
}



const updateSocio = async (req, res) => {
    const { id } = req.params
    const socio = adapters.parseSocio(req.body)
    const result = await db.updateSocio(id, socio)
    res.json(result)
}



const deleteSocio = async (req, res) => {
    const { id } = req.params
    const result = await db.deleteSocio(id)
    res.json(result)
}



export const controllers = {
    getSocios,
    getSocio,
    createSocio,
    updateSocio,
    deleteSocio
}