import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/especie";

//Entende que tudo que se encontra abaixo vai ser mapeado como uma tabela, como se fosse um MODEL
@Entity()
export default class PetEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nome:string;
    @Column()
    especie:EnumEspecie;
    @Column()
    dataDeNascimento:Date;
    @Column()
    adotado:boolean;
}