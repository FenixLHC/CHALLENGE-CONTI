import { Router } from "express";
import { createTeam, deleteTeamById, getTeamById, getTeams, getUnderAgePlayersByTeam, updateTeamById } from "../controllers/teams.controllers";

const router = Router()

router.get('/underAgePlayers', getUnderAgePlayersByTeam)

router.get('/:id', getTeamById)

router.get('/', getTeams)

router.post('/', createTeam)

router.put('/:id', updateTeamById)

router.delete('/:id', deleteTeamById)

export default router