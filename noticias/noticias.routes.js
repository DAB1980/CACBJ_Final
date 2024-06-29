import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from '../noticias/noticias.controllers.js'

const router = Router()

router
    .use(middlewares.routes.checkRoute)
    
   
    .get('/:id',
          middlewares.routes.checkParams,
          controllers.getNoticia)

    .get('/',
        controllers.getNoticias)
    
    .post('/',
        middlewares.files.uploadImage.single('image'),
        controllers.createNoticia)

    .put('/',
        controllers.incomplete)

    .put('/:id',
        middlewares.routes.checkParams,
        controllers.updateNoticia)

    .delete('/:id',
        middlewares.routes.checkParams,
        controllers.deleteNoticia)

export default router
