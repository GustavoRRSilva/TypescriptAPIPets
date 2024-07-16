import express, { Response } from "express";
import PetController from "../controllers/PetController";
import PetRepository from "../repositories/PetRepository";

const router = express.Router();
const petRepository = new PetRepository();


router.post("/", petController.criaPet)
router.get("/",petController.obtemPets);
router.put("/:id",petController.atualizaPet);
router.delete("/:id",petController.deletaPet)

export default router;