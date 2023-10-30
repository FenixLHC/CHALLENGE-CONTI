import User from "../entities/User"
import { Auth } from "../interfaces/Auth.interface"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken, verifyTokenPublic } from "../utils/jwt.handle"

export const registerService = async (body: User) => {
    
    
    const {email,password} = body
    const existUser = await User.findOne({where: {email}})
    console.log('existUser', existUser)
    console.log('body', body)
    if (existUser) throw new Error('User already exist')
    
    const passwordHash = await encrypt(password)
    console.log(passwordHash)
    const user = new User()
    user.email=body.email
    user.name = body.name
    user.lastname = body.lastname
    user.password = passwordHash
    console.log(user)
    const newUser = await User.save(user)

    return newUser
    
} 

export const loginService = async ({email,password}: Auth) => {
    const existUser = await User.findOne({where: {email}})

    if (!existUser) throw new Error('User does not exist')

    const passwordHash = existUser.password
    const validate = await verified(password,passwordHash)
    if (!validate) throw new Error('Password incorrect')

    const token = generateToken(existUser.email)

    return token

} 
