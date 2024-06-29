import { connection } from "../db/mysql.connection.js"



const getPlantel_FM = async () => {
    try {
        const query = `SELECT * FROM plantel_fm`
        const [result] = await connection.promise().query(query)

        return result
    }
    catch (err) { return [] }
}




const createPlantel_FM = async (plantel_fm) => {
    try {
       
        const { nombre, apellido, pos, img} = plantel_fm
        const fields = [nombre, apellido, pos, img]
        
        const query = `INSERT INTO plantel_fm VALUES (NULL,?,?,?,?)`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0
    }
    catch (err) { return false }
}



const updatePlantel_FM = async (id, plantel_fm) => {
    try {
        
        const { nombre, apellido, pos} = plantel_fm
        const fields = [nombre, apellido, pos, id]
        
        //console.log(fields)
        const query = `UPDATE plantel_fm SET nombre=?,apellido=?,pos=? WHERE id=?`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}



const deletePlantel_FM = async (id) => {
    try {
        const query = `DELETE FROM plantel_fm WHERE id = ?`
        const [result] = await connection.promise().query(query, id)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}

const getPlantel_FMbyId = async (id) => {
    try {
        
        const query = `SELECT * FROM plantel_fm WHERE id=${id}`
        const [result] = await connection.promise().query(query)
        //console.log("query=: ",query)
        return result
    }
    catch (err) { return Error(10) }
}



export const db = {
    getPlantel_FM,
    getPlantel_FMbyId,
    createPlantel_FM,
    updatePlantel_FM,
    deletePlantel_FM
}