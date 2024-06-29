import { connection } from '../db/mysql.connection.js'
import { helpers } from './users.helpers.js'


const table = 'users'


const getUsers = async () => {
    const query = `SELECT * FROM ${table}`
    const [result] = await connection.promise().query(query)
    return result
}

const getUser = async (id) => {
    try {
        
        const query = `SELECT * FROM users WHERE id=${id}`
        const [result] = await connection.promise().query(query)
        //console.log("query=: ",query)
        return result
    }
    catch (err) { return Error(10) }
}

const createUser = async (user) => {

    try {
       
        const { nombre, apellido, mail, alias, perfil } = user
        const fields = [nombre, apellido, mail, alias, perfil]
        
        const query = `INSERT INTO ${table} VALUES (NULL,?,?,?,?,?)`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0
    }
    catch (err) { return false }
   
}



const updateUser = async (id, user) => {

    try {
        
        const { nombre, apellido, mail, alias, perfil } = user
        const fields = [nombre, apellido, mail, alias, perfil,id]
    
        //console.log(fields)
        const query = `UPDATE ${table} SET nombre=?, apellido=?, mail=?, alias=?, perfil=? WHERE id=?`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }

    
}



const deleteUser = async (id) => {
    try {
        const query = `DELETE FROM ${table} WHERE id = ?`
        const [result] = await connection.promise().query(query, id)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}


export const db = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}