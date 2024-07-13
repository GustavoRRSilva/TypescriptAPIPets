import { Response, Request } from "express";

let listaDePets = [];
export default class PetController {
    criapet(req: Request, res: Response) {
        const novopet = req.body;
        listaDePets.push(novopet);
        return res.status(201).json(novopet)
    }
}