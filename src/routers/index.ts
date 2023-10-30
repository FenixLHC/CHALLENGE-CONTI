import { Router } from "express";
import playerRouters from './players.routers'
import teamsRouter from './teams.routers'
import historiesRouter from './histories.routers'

const router = Router()

router.use('/players', playerRouters)
router.use('/teams', teamsRouter)
router.use('/histories', historiesRouter)

export default router