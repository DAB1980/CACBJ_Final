import User from "../models/User.js"


const parseUser = (data) => {
   
    const { nombre, apellido, mail, alias, perfil } = data
    const user = new User(nombre, apellido, mail, alias, perfil)
    return user
}



export const adapters = {
    parseUser
}