import { db } from "./socios.dao.mysql.js"
import { adapters } from '../socios/socios.adapters.js'


const getSocios = async (_, res) => {
    const result = await db.getSocios()
    res.json(result)
}

const getSocio = async (req, res) => {
    const socio= adapters.parseSocio(req.body)
    const result = await db.getSocio(socio)
    result ? res.redirect('/') : res.redirect('/')
}


const createSocio = async (req, res) => {
    const socio = adapters.parseSocio(req.body)
    const result = await db.createSocio(socio)
    res.json(result)
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