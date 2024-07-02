import { middlewares as files } from "../files/files.middlewares.js";
import { middlewares as routes } from './routes.middlewares.js'
import { middlewares as auth } from './auth.middlewares.js'
import { middlewares as errors } from './errors.middlewares.js'

export const middlewares = {
    files,
    routes,
    auth,
    errors
} 