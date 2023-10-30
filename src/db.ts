import { DataSource } from 'typeorm'
import Player from './entities/Player'
import Team from './entities/Team'
import History from './entities/History'

 const  AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Godiva11**',
    port: 5432,
    database: 'aoki',
    entities: [Player, Team, History ],
    logging: true,
    synchronize: true
})

export default AppDataSource