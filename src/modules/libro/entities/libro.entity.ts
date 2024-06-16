import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar', length:250})
    titulo:string;

    @Column({type:'varchar', length:250})
    autor:string;

    @Column({type:'text', nullable:true})
    sinopsis:string;
    
    @Column({type:'boolean', default:true})
    libroFav:Boolean;

    @ManyToOne(()=> Categoria, (cat) => cat.libro) 
    categoria:Categoria
}

