import { Router } from "express";
import playerRouters from './players.routers'
import teamsRouter from './teams.routers'
import historiesRouter from './histories.routers'
import authRouter from './auth.routers'

const router = Router()

router.use('/players', playerRouters)

router.use('/teams', teamsRouter)

router.use('/histories', historiesRouter)

router.use('/auth', authRouter)

export default router