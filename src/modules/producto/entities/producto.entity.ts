import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";

@Entity() // Añadir la decoración @Entity() para indicar que esta es una entidad
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @Column()
    precio: string;

    @Column()
    stock: number;

    @Column()
    image: string;

    @Column()
    descripcion: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => Categoria, (cat)=>cat.producto)
    categoria: Categoria;

    @OneToMany(()=>PedidoProducto, pedprod=>pedprod.producto)
    pedidoProducto: PedidoProducto[];
}