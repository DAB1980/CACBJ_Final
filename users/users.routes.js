import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from '../users/users.controllers.js'


const router = Router()

router
    .get('/:id',
        middlewares.routes.checkParams,
        controllers.getUser)

    .get('/', controllers.getUsers)

    .post('/', controllers.createUser)

    .put('/:id', 
        middlewares.routes.checkParams,
        controllers.updateUser)

    .delete('/:id',
        middlewares.routes.checkParams,
         controllers.deleteUser)

export default router
