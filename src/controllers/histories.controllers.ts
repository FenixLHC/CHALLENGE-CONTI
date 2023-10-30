import { Request, Response } from "express";
import History from "../entities/History";
import AppDataSource from "../db";
import Player from "../entities/Player";
import getMostTeamsPlayer from "../utils/getMostTeamsPlayer";



export const createHistory = async (req: Request, res: Response) => {
    try {
        const {startAge, endAge, playerId, teamId} = req.body
    const history = new History()

    history.startAge = startAge
    history.endAge = endAge
    history.player = playerId
    history.team = teamId
    await history.save()

    return res.send(history)
    } catch (error) {
        if (error instanceof Error) return res.status(500).json({message: error.message})
    }
}

export const getHistories = async (req: Request, res:Response) => {
    const historys = await History.find({
        relations:{team: true, player: true},
        select:{team:{name: true},player:{name:true,lastname:true}}
    })

    return res.send(historys)
}

export const getHistoryById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const history = await History.find({
            relations:{team: true, player: true},
        select:{team:{name: true},player:{name:true,lastname:true}},
        where: {id}
        })
    
        return res.send(history)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const getMostTeamChanges = async (req: Request, res: Response) => {
    try {
        const histories = await History.find({
            relations: {team:true, player:true},
            select: {team: {name:true}, player: {name:true, lastname:true, id:true},id:true}
        })
        
        const result = getMostTeamsPlayer(histories)
  
  return res.json(result)
    } catch (error) {
        console.log(error)
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const updateHistoryById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const history = await History.update({id},req.body)
    
        return res.send(history)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const deleteHistoryById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const history = await History.delete({id})
    
        return res.status(204).send(history)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}