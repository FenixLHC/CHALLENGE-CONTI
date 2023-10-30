import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'SECRETO_DE_LAUTARO'
const JWT_PUBLIC = process.env.JWT_PUBLIC || 'CLAVE_PUBLICA'

export const generateToken = async (id:string) => {
    const jwt = sign({id}, JWT_SECRET,{expiresIn: "3h"})
    return jwt
}

export const verifyToken = async (jwt: string) => {
    const isCorrect = verify(jwt,JWT_SECRET)
    return isCorrect
}

export const verifyTokenPublic = async (jwt: string) => {
    const isCorrect = verify(jwt,JWT_PUBLIC)
    return isCorrect
}
