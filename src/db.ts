import { DataSource } from 'typeorm'
import Player from './entities/Player'
import Team from './entities/Team'
import History from './entities/History'
import User from './entities/User'
import dotenv from 'dotenv';

dotenv.config();



 const  AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || '0.0.0.0',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    port: parseInt(process.env.DB_PORT|| '5432'),
    database: process.env.DB_DATABASE||'aoki',
    entities: [Player, Team, History, User ],
    logging: true,
    synchronize: true
})

export default AppDataSource