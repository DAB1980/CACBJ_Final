import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { config } from './auth.config.js'
import { db } from "../users/users.dao.mysql.js"

const register = async (req, res) => {
    const { nombre, apellido, mail, alias, perfil = 'lector', password } = req.body
    console.log(req.body)
    const hash = bcrypt.hashSync(password, 1)
    const user = {
        nombre,
        apellido,
        mail,
        alias,
        perfil,
        password: hash
    }
    const existingUser = await db.getUserByEmail(mail)
    if(existingUser.length){
        return res.status(409).json({ error: 'Email ya registrado' })
    }
    const result = await db.createUser(user)
    if(!result){
        return res.status(500).json({ error: 'Error al registrar el usuario' })
    }
    const payload = { nombre, apellido }
    const signature = config.secretKey
    const token = jwt.sign(payload, signature, config.token)
    res
    .status(201)
    .cookie('token', token, config.cookie)
    .json({nombre, apellido, mail, perfil, alias})
}

const login = async (req, res) => {
    const { mail, password } = req.body
    const [user] = await db.getUserByEmail(mail)
    if(!user){
        return res.status(400).json({ error: 'Usuario no encontrado' })
    }
    const isValidPassword = bcrypt.compareSync(password, user.password)
    if(!isValidPassword){
        return res.status(401).json({ error: 'Credenciales incorrectas' })
    }
    const payload = { nombre: user.nombre, apellido: user.apellido, mail: user.mail, perfil: user.perfil, alias: user.alias }
    const signature = config.secretKey
    const token = jwt.sign(payload, signature, config.token)
    res
    .status(201)
    .cookie('token', token, config.cookie)
    .json(payload)
}


export const controllers = {
    register, 
    login
}