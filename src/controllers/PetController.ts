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
    obtemPets(res:Response){
        return res.status(201).json(listaPets)
    }
}