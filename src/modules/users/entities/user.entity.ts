import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    mail:string;

    @Column()
    password:string;

    @Column()
    telefono:string;

}

