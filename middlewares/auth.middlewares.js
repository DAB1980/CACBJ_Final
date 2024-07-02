import jwt from 'jsonwebtoken'
import { config } from '../auth/auth.config.js'

const authJwt = (req, res, next) => {
    const token = req.signedCookies.token
    if(!token){
        return res.status(401).json({ error: 'El usuario debe estar registrado para realizar esta acción'})
    }
    jwt.verify(token, config.secretKey, (err, decoded) => {
        console.log(decoded.iduser_rol)
        if(err){
            return res.status(401).json({ error: 'El token de autenticación está vencido o es inválido'})
        }
    })
    next()
}

const authRoles = (allowedRoles) => {
    return (req, res, next) => {
        const token = req.signedCookies.token
        if (!token) {
            return res.status(401).json({ error: 'El usuario debe estar registrado para realizar esta acción'})
        }
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                console.log(err)
                return res.status(401).json({ error: 'El token de autenticación está vencido o es inválido' });
            }
            const userRole = decoded.iduser_rol;
            console.log(allowedRoles.includes(userRole))
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({ error: 'Acceso denegado. No tienes permiso para acceder a este recurso' });
            }
            next();
        });
    };
};

export const middlewares = {
    authJwt,
    authRoles
}