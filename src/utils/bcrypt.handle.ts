import { hash, compare } from "bcryptjs"
export const encrypt = async (password: string) => {
    if (typeof password !== 'string') throw new Error('password must to be a string')
    const passwordHash = await hash(password,8)
    

    return passwordHash
}

export const verified = async (password:string, passwordHash:string) => {
    const validate = await compare(password,passwordHash)

    return validate
}

