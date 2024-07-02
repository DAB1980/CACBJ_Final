import { db } from "./users.dao.mysql.js"
import { adapters } from '../users/users.adapters.js'


const getUsers = async (_, res) => {
    const result = await db.getUsers()
    res.json(result)
}

const getUsersABM = async (_, res) => {
    const result = await db.getUsersABM()
    res.json(result)
}

const getUser = async (req, res) => {
    const { id } = req.params
    const result = await db.getUser(id)
   // console.log("va usuario",result)
    res.json(result)
}




const createUser = async (req, res) => {
    const user = adapters.parseUser(req.body)
    const result = await db.createUser(user)
    result ? res.redirect('/usersABM.html') : res.redirect('/usersABM.html')
}



const updateUser = async (req, res) => {
    
    const { id } = req.params
    const user = adapters.parseUser(req.body)
    const result = await db.updateUser(id, user)
    result ? res.redirect('/usersABM.html') : res.redirect('/usersABM.html')
}



const deleteUser = async (req, res) => {
    const { id } = req.params
    const result = await db.deleteUser(id)
    res.json(result)
}



export const controllers = {
    getUsers,
    getUser,
    getUsersABM,
    createUser,
    updateUser,
    deleteUser
}