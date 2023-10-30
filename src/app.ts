import express from "express"
import morgan from "morgan"
import cors from "cors"
import routers from './routers'


import("dotenv")

const app = express()
app.use(morgan('dev'))
app.use(cors({
    origin: '*'
}))
app.use(express.json())

app.use('/', routers)

export default app