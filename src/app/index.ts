import { Middleware } from './controllers/middleware/Middleware'

import dotenv from 'dotenv'

dotenv.config()

console.log(`Versión api telegram: ${process.env.BOTS_API}`)

new Middleware()
