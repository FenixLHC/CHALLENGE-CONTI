import { Request, Response } from "express"
import { loginService, registerService } from "../services/auth.service"
import RequestExt from "../interfaces/RequestExtended.interface"
import User from "../entities/User"
import { Auth } from "../interfaces/Auth.interface"

export const registerCtrl = async ({user}: RequestExt, res: Response) => {
    try {
        if (user !instanceof User) throw new Error('Faltan datos de usuario')
        
        const response = await registerService(user as User)

        return res.status(200).json(`El usuario ${response.email} se ha registrado correctamente.`)
    } catch (error) {
        if (error instanceof Error)
        return res.status(400).send({message: error.message})
    }
}

export const loginCtrl = async ({user}: RequestExt, res: Response) => {
    try {
        const {email, password} = user as Auth
        if ( !email || !password) throw new Error('Faltan credenciales')
        const response = await loginService(user as Auth)

        return res.status(200).json(response)
    } catch (error) {
        if (error instanceof Error)
        return res.status(400).send({message: error.message})
    }
}