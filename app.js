import express from 'express'
import usersRoutes from './users/users.routes.js'
import sociosRoutes from './socios/socios.routes.js'
import sociosABMRoutes from './socios/sociosABM.routes.js'
import noticiasRoutes from './noticias/noticias.routes.js'
import { middlewares } from './middlewares/index.js'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', usersRoutes)
app.use('/usersABM', usersABMRoutes)
app.use('/socios', sociosRoutes)
app.use('/sociosABM', sociosABMRoutes)
app.use('/noticias', noticiasRoutes)
app.use('/auth', authRoutes)

app.use(middlewares.errors.errorController)

app.listen(PORT, () => {
    console.clear()
    console.log(`Escuchando en http://localhost:${PORT}`)
})
