import { Response, Request } from "express";
import type TipoPet from "../tipos/TipoPet";

let listaPets: TipoPet[] = [];

export default class PetController {
    criaPet(req: Request, res: Response) {
        const { id,
            nome,
            especie,
            idade,
            adotado, } = <TipoPet>req.body;
        const newPet: TipoPet = {
            id,
            nome,
            especie,
            idade,
            adotado,
        }
        listaPets.push(newPet);
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
            idade } = req.body as TipoPet;
        const pet = listaPets.find((pet) => pet.id == Number(id));
        if (!pet) {
            return res.status(404).json({ erro: "Pet não encontrado" })
        }
        pet.nome = nome;
        pet.idade = idade;
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
        const index = listaPets.indexOf(pet);
        listaPets.splice(index, 1);
        return res.status(200).json({ message: "Pet excluido com sucesso" });
    }
}