import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from '../provincias/provincias.controllers.js'


const router = Router()

router
    .get('/:id',
        middlewares.routes.checkParams,
        controllers.getProvinciaById)

    .get('/', controllers.getProvincias)

export default router
