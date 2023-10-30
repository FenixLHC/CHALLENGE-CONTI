import { Router } from "express";
import { createHistory, deleteHistoryById, getHistoryById, getHistories, updateHistoryById, getMostTeamChanges } from "../controllers/histories.controllers";

const router = Router()

router.get('/getMostTeamChanges', getMostTeamChanges)

router.get('/:id', getHistoryById)

router.get('/', getHistories)

router.post('/', createHistory)

router.put('/:id', updateHistoryById)

router.delete('/:id', deleteHistoryById)

export default router