
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nombre: string;

    @Column()
    public categoria: string;
    
    @Column()
    public precio: number;

    @Column()
    public inventario: number;

}