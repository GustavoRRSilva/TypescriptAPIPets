import { Response, Request } from "express";
import type TipoPet from "../tipos/TipoPet";
import EnumEspecie from "../enum/especie";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";

let listaPets: TipoPet[] = [];

let id = 0;
function geraId() {
    id = id + 1;
    return id;
}
export default class PetController {
    constructor(private repository: PetRepository) {

    }
    criaPet(req: Request, res: Response) {
        const {
            nome,
            especie,
            dataDeNascimento,
            adotado, } = <PetEntity>req.body;
        //Verifica se a especie é gato ou cachorro
        if (!Object.values(EnumEspecie).includes(especie)) {
            return res.status(201).json({ error: "Espécie invalida" })
        }
        const newPet = new PetEntity();
      (  newPet.id = geraId()),
        (newPet.nome = nome),
        (newPet.especie = especie),
        (newPet.dataDeNascimento=dataDeNascimento),
        (newPet.adotado =  adotado),
        this.repository.criaPet(newPet)
        return res.status(201).json(newPet)
    }
    obtemPets(req: Request, res: Response) {
        return res.status(201).json(listaPets)
    }

    atualizaPet(req: Request, res: Response) {
        const { id } = req.params;
        const { adotado,
            nome,
            especie,
            dataDeNascimento } = req.body as TipoPet;
        //pega o json do pet
        const pet = listaPets.find((pet) => pet.id == Number(id));
        if (!pet) {
            return res.status(404).json({ erro: "Pet não encontrado" })
        }
        pet.nome = nome;
        pet.dataDeNascimento = dataDeNascimento;
        pet.especie = especie;
        pet.adotado = adotado;

        return res.status(200).json(pet);
    }
    deletaPet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = listaPets.find((pet) => pet.id === Number(id));
        if (!pet) {
            return res.status(404).json({ error: "Pet não encontrado" })
        }
        //pega o json do pet
        const index = listaPets.indexOf(pet);
        //Remove o json do pet
        listaPets.splice(index, 1);
        return res.status(200).json({ message: "Pet excluido com sucesso" });
    }
}