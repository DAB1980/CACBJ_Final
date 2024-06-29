import { Router } from 'express'
import { middlewares } from '../middlewares/index.js'
import { controllers } from '../plantel_fm/plantel_fm.controllers.js'

const router = Router()

router
    .use(middlewares.routes.checkRoute)
    
   
    .get('/:id',
          middlewares.routes.checkParams,
          controllers.getPlantel_FMbyId)

    .get('/',
        controllers.getPlantel_FM)
    
    .post('/',
        middlewares.files.uploadImage.single('image'),
        controllers.createPlantel_FM)

    .put('/',
        controllers.incomplete)

    .put('/:id',
        middlewares.routes.checkParams,
        controllers.updatePlantel_FM)

    .delete('/:id',
        middlewares.routes.checkParams,
        controllers.deletePlantel_FM)

export default router
