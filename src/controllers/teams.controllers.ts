import { Request, Response } from "express";
import Team from "../entities/Team";
import {  LessThan  } from "typeorm";
import Player from "../entities/Player";
import AppDataSource from "../db";


export const createTeam = async (req: Request, res: Response) => {
    try {
        const {name, city, country} = req.body
    const team = new Team()

    team.name = name
    team.city = city
    team.country = country
    
    await team.save()

    return res.send(team)
    } catch (error) {
        if (error instanceof Error) return res.status(500).json({message: error.message})
    }
}

export const getTeams = async (req: Request, res:Response) => {
    const teams = await Team.find()

    return res.send(teams)
}

export const getTeamById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const team = await Team.findOneBy({id})
    
        return res.send(team)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const getUnderAgePlayersByTeam = async (req: Request, res:Response) => {
    try {
         const n = req.query.n ?? 5

            const queryBuilder = AppDataSource.createQueryBuilder()
            .from(Team, 'team')
            .select(['team.name', 'COUNT(player.id) AS count'])
            .innerJoin(Player, 'player', 'player.teamId = team.id')
            .where('player.age < 18')    
            .groupBy('team.name')
            .orderBy('count', 'DESC')
            .limit(parseInt(n as string))
            const result = await queryBuilder.getRawMany();
    
        return res.send(result)
    } catch (error) {
        console.log(error)
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}


export const updateTeamById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const team = await Team.update({id},req.body)
    
        return res.send(team)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}

export const deleteTeamById = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const team = await Team.delete({id})
    
        return res.status(204).send(team)
    } catch (error) {
        if (error instanceof Error) res.status(500).json({message: error.message})
    }
}