import { NextFunction, Request, Response } from "express";
import { verifyToken, verifyTokenPublic } from "../utils/jwt.handle";
import RequestExt from "../interfaces/RequestExtended.interface";

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const getJwt = req.headers.authorization || null
        const jwt = getJwt?.split(' ').pop()
        const verified = await verifyToken(`${jwt}`)
        if (!verified) return res.status(401).send("TOKEN_INVALIDO")
        req.user= verified
        next()
    } catch (error) {
        res.status(400).send('SESSION_NOT_VALID')
    }
}

export const checkJwtPublic = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const getJwt = req.headers.authorization || null
        const jwt = getJwt?.split(' ').pop()
        const verified = await verifyTokenPublic(`${jwt}`)
        if (!verified) return res.status(401).send("TOKEN_INVALIDO")
        req.user= verified
        next()
    } catch (error) {
        res.status(400).send('SESSION_NOT_VALID')
    }
}