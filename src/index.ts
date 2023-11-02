require("reflect-metadata")
import app from './app'
import DB from './db'
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000
console.log('puerto',process.env.PORT)
async function main(){
    try {
        await DB.initialize()
        console.log('Database is connected')
        app.listen(PORT, ()=> console.log('Server is running on port '+ PORT))
    
    } catch (error) {
        console.log(error)
    }
}

main()