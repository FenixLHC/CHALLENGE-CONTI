import { Router } from "express";
import { createPlayer, deletePlayerById, getPlayerById, getPlayers, getPlayersByPosition, getPlayersByPositionAndTeamCountry, getPlayersByTeam, updatePlayerById } from "../controllers/players.controllers";
import { checkJwt } from "../middlewares/session";

const router = Router()

router.get('/:id', getPlayerById)

router.get('/team/:id', getPlayersByTeam)

router.get('/position/:position', getPlayersByPosition)

router.get('/positionAndCountry/:position/:country', getPlayersByPositionAndTeamCountry)


router.get('/', getPlayers)

router.post('/', createPlayer)

router.put('/:id', updatePlayerById)

router.delete('/:id', checkJwt, deletePlayerById)

export default router