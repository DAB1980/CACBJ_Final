import { Router } from 'express'
import { controllers } from './auth.controller.js'


const router = Router()

router
    .post('/register', controllers.register)
    .post('/login', controllers.login)
    .get('/logout', controllers.logout)

export default router
