import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from './users.controllers.js'


const router = Router()

router
    .get('/', controllers.getUsersABM)

export default router
