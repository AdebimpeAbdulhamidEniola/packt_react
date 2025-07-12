import express from 'express'
import { postsRoutes } from './routes/posts.js'

const app = express()
postsRoutes(app)

export { app }
