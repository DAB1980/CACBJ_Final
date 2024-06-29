import { connection } from "../db/mysql.connection.js"



const getNoticias = async () => {
    try {
        const query = `SELECT * FROM noticias`
        const [result] = await connection.promise().query(query)

        return result
    }
    catch (err) { return [] }
}




const createNoticia = async (noticia) => {
    try {
       
        const { title, subtitle, date, category, content,img } = noticia
        const fields = [title, subtitle, date, category, content,img]
        
        const query = `INSERT INTO noticias VALUES (NULL,?,?,?,?,?,?)`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0
    }
    catch (err) { return false }
}



const updateNoticia = async (id, noticia) => {
    try {
        
        const { title, subtitle, date, category, content} = noticia
        const fields = [title, subtitle, date, category, content, id]
        //console.log(fields)
        const query = `UPDATE noticias SET title=?,subtitle=?,date=?,category=?,content=? WHERE id=?`
        const [result] = await connection.promise().query(query, fields)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}



const deleteNoticia = async (id) => {
    try {
        const query = `DELETE FROM noticias WHERE id = ?`
        const [result] = await connection.promise().query(query, id)

        return result.affectedRows > 0 ? Error(0) : Error(3)
    }
    catch (err) { return Error(10) }
}

const getNoticia = async (id) => {
    try {
        
        const query = `SELECT * FROM noticias WHERE id=${id}`
        const [result] = await connection.promise().query(query)
        //console.log("query=: ",query)
        return result
    }
    catch (err) { return Error(10) }
}



export const db = {
    getNoticias,
    getNoticia,
    createNoticia,
    updateNoticia,
    deleteNoticia
}