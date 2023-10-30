import { Entity, CreateDateColumn, Column, PrimaryColumn, BaseEntity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm'
import Team from './Team'
import History from './History'

@Entity()
class Player extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name: string
    @Column()
    lastname: string
    @Column()
    age: number
    @Column()
    position:string
    @Column({default: true})
    active: boolean
    @CreateDateColumn()
    createdAt: Date
    @CreateDateColumn()
    updateAt: Date

    @ManyToOne(() => Team, team => team.players)
    @JoinColumn({name: 'teamId'})
    team: Team;

    @OneToMany(() => History, history => history.player)
    histories: History[];
}

export default Player