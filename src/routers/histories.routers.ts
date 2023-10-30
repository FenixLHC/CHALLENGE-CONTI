import { Router } from "express";
import { createHistory, deleteHistoryById, getHistoryById, getHistories, updateHistoryById, getMostTeamChanges } from "../controllers/histories.controllers";
import { checkJwt } from "../middlewares/session";

const router = Router()

router.get('/getMostTeamChanges', getMostTeamChanges)

router.get('/:id', getHistoryById)

router.get('/', getHistories)

router.post('/', createHistory)

router.put('/:id', updateHistoryById)

router.delete('/:id', checkJwt , deleteHistoryById)

export default router