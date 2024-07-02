import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from '../noticias/noticias.controllers.js'

const router = Router()

router
    .get('/:id',
          middlewares.routes.checkParams,
          controllers.getNoticia)

    .get('/',
        controllers.getNoticias)
    
    .post('/',
        middlewares.auth.authJwt,
        middlewares.auth.authRoles([1, 2]),
        middlewares.files.uploadImage.single('image'),
        controllers.createNoticia)

    .put('/',
        middlewares.auth.authJwt,
        middlewares.auth.authRoles([1, 2]),
        controllers.incomplete)

    .put('/:id',
        middlewares.auth.authJwt,
        middlewares.auth.authRoles([1, 2]),
        middlewares.routes.checkParams,
        controllers.updateNoticia)

    .delete('/:id',
        middlewares.auth.authJwt,
        middlewares.auth.authRoles([1, 2]),
        middlewares.routes.checkParams,
        controllers.deleteNoticia)

export default router
