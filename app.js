import express from 'express'
import usersRoutes from './users/users.routes.js'
import sociosRoutes from './socios/socios.routes.js'
import sociosABMRoutes from './socios/sociosABM.routes.js'
import usersABMRoutes from './users/usersABM.routes.js'
import noticiasRoutes from './noticias/noticias.routes.js'
import provinciasRoutes from './provincias/provincias.routes.js'
import authRoutes from './auth/auth.routes.js'
import { middlewares } from './middlewares/index.js'
import cookieParser from 'cookie-parser'
import { config } from './auth/auth.config.js'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'))

app.use(cookieParser(config.secretKey))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', middlewares.auth.authJwt, middlewares.auth.authRoles([1]), usersRoutes)
app.use('/usersABM', middlewares.auth.authJwt, middlewares.auth.authRoles([1]), usersABMRoutes)
app.use('/socios', middlewares.auth.authJwt,middlewares.auth.authRoles([1]), sociosRoutes)
app.use('/sociosABM', middlewares.auth.authJwt, middlewares.auth.authRoles([1]), sociosABMRoutes)
app.use('/noticias', noticiasRoutes)
app.use('/provincias', provinciasRoutes)
app.use('/auth', authRoutes)

app.use(middlewares.errors.errorController)

app.listen(PORT, () => {
    console.clear()
    console.log(`Escuchando en http://localhost:${PORT}`)
})
