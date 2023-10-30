
import {Entity, Column, PrimaryColumn, BaseEntity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import Player from './Player'
import History from './History'
@Entity()
class Team extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name: string
    @Column()
    city: string
    @Column()
    country: string

    @OneToMany(() => Player, (player) => player.team)
    players: Player[]

    @OneToMany(() => History, history => history.team)
  histories: History[];
}

export default Team