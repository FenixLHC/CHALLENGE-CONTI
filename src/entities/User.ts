import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email:string

    @Column()
    password:string
    
    @Column()
    name: string

    @Column()
    lastname: string    
}

export default User