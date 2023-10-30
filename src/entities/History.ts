import {Entity, Column, PrimaryColumn, BaseEntity, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm'
import Team from './Team';
import Player from './Player';

@Entity()
class History extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    startAge: string
    @Column()
    endAge: string
    
    @ManyToOne(() => Team, team => team.histories)
    @JoinColumn({name: 'teamId'})
    team: Team;

    @ManyToOne(() => Player, player => player.histories)
    @JoinColumn({name: 'playerId'})
    player: Player;
}

export default History