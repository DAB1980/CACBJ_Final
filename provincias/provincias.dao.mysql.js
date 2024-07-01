import { connection } from '../db/mysql.connection.js'
import { helpers } from './provincias.helpers.js'


const table = 'provincias'


const getProvincias = async () => {
    const query = `SELECT * FROM ${table}`
    const [result] = await connection.promise().query(query)
    
    return result
}


const getProvinciabyId = async (id) => {
    try {
        
        const query = `SELECT * FROM  ${table} WHERE id=${id}`
        const [result] = await connection.promise().query(query)
        //console.log("va usuario",result)
        return result
    }
    catch (err) { return Error(10) }
}



export const db = {
    getProvincias,
    getProvinciabyId
}