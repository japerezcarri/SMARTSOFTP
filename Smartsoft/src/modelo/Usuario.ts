
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nombre: string;

    @Column()
    public apellido: string;

    @Column()
    public correo: string;
    
    @Column()
    public contrasena: string;

}