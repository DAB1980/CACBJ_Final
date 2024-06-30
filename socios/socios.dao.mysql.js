import { connection } from '../db/mysql.connection.js'
import { helpers } from './socios.helpers.js'


const table = 'socios'


const getSocios = async () => {
    const query = `SELECT * FROM ${table}`
    const [result] = await connection.promise().query(query)
    return result
}

const getSocio = async (id) => {
    try {
        
        const query = `SELECT * FROM ${table} WHERE id=${id}`
        const [result] = await connection.promise().query(query)
        //console.log("query=: ",query)
        return result
    }
    catch (err) { return Error(10) }
}

const createSocio = async (socio) => {
    try {
       console.log("socio: ",socio)
        const { nombre, apellido, mail, idprovincia, activo, fecha_alta, fecha_baja } = socio
        const fields = [nombre, apellido, mail,idprovincia, activo, fecha_alta, fecha_baja]
       
        
        const query = `INSERT INTO ${table} VALUES (NULL,?,?,?,?,?,?,?)`
        console.log("query: ",query)
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0
    }
    catch (err) { return false }
   
    
}




const updateSocio = async (id, socio) => {
    try {
        
        const { nombre, apellido, mail,idprovincia, activo, fecha_alta, fecha_baja } = socio
        const fields = [nombre, apellido, mail, idprovincia, activo, fecha_alta, fecha_baja,id]
        console.log(fields)
        const query = `UPDATE ${table} SET nombre=?, apellido=?, mail=?,idprovincia=? ,activo=?, fecha_alta=?, fecha_baja=? WHERE id=?`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }

   
}



const deleteSocio = async (id) => {
    try {
        const query = `DELETE FROM ${table} WHERE id = ?`
        const [result] = await connection.promise().query(query, id)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }

}

export const db = {
    getSocios,
    getSocio,
    createSocio,
    updateSocio,
    deleteSocio
}