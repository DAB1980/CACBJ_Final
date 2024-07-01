import { db } from "./provincias.dao.mysql.js"
import { adapters } from './provincias.adapters.js'


const getProvincias = async (_, res) => {
    const result = await db.getProvincias()
    res.json(result)
}

const getProvinciaById = async (req, res) => {
    const { id } = req.params
    const result = await db.getProvinciaById(id)
   // console.log("va prov",result)
    res.json(result)
}

export const controllers = {
    getProvinciaById,
    getProvincias
    
}