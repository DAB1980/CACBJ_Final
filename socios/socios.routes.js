import { Router } from 'express'
import { controllers } from '../socios/socios.controllers.js'


const router = Router()

router
    .get('/:id',controllers.getSocio)
    .get('/', controllers.getSocios)
    .post('/', controllers.createSocio)
    .put('/:id', controllers.updateSocio)
    .delete('/:id', controllers.deleteSocio)

export default router
