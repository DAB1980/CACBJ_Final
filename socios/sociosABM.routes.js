import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from './socios.controllers.js'


const router = Router()

router
    .get('/', controllers.getSociosABM)

export default router
