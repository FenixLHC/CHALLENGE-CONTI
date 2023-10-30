import { Router } from "express";
import { createTeam, deleteTeamById, getTeamById, getTeams, getUnderAgePlayersByTeam, updateTeamById } from "../controllers/teams.controllers";
import { checkJwt } from "../middlewares/session";

const router = Router()

router.get('/underAgePlayers', getUnderAgePlayersByTeam)

router.get('/:id', getTeamById)

router.get('/', getTeams)

router.post('/', createTeam)

router.put('/:id', updateTeamById)

router.delete('/:id', checkJwt, deleteTeamById)

export default router