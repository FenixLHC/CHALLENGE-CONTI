import { Request, Response } from "express";
import Player from "../entities/Player";
import { DataSource, getRepository } from "typeorm";
import Team from "../entities/Team";

export const createPlayer = async (req: Request, res: Response) => {
    try {
        const {name, lastname, age, position, teamId} = req.body
    const player = new Player()

    player.name = name
    player.lastname = lastname
    player.age = age
    player. position = position
    player.team = teamId

    await player.save()
    return res.send(player)
    } catch (error) {
        if (error instanceof Error) return res.status(500).json({message: error.message})
    }
}

export const getPlayers = async (req: Request, res:Response) => {
    const players = await Player.find()

    return res.send(players)
}

export const getPlayerById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const player = await Player.findOneBy({id})
    
        return res.send(player)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const getPlayersByTeam = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const players = await Player.find({
            relations: { team: true},
            where: { team: { id } }
        })
    
        return res.send(players)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const getPlayersByPosition = async (req: Request, res:Response) => {
    try {
        console.log('entramo')
        const {position} = req.params
        const players = await Player.find({
            where: { position }
        })
    
        return res.send(players)
    } catch (error) {
        console.log(error)
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const getPlayersByPositionAndTeamCountry = async (req: Request, res:Response) => {
    try {
        const {position, country} = req.params
        
        const players = await Player.find({
            select: {
                name: true,
                lastname: true,
                age: true
            },
            relations: {
                team: true
            },
            where: {
                team: { country },
                position
            }
        })

        return res.send(players)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}
export const updatePlayerById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const player = await Player.update({id},req.body)
    
        return res.send(player)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const deletePlayerById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const player = await Player.delete({id})
    
        return res.status(204).send(player)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}