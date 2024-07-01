import User from "../models/User.js"


const parseUser = (data) => {
   
    const { nombre, apellido, mail, alias, iduser_rol, password } = data
    const user = new User(nombre, apellido, mail, alias, iduser_rol, password)
    return user
}



export const adapters = {
    parseUser
}