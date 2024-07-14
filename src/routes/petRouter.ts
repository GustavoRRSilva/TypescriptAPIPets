import express, { Response } from "express";
import PetController from "../controllers/PetController";

const router = express.Router();

const petController = new PetController();

router.post("/", petController.criaPet)
router.get("/",petController.obtemPets);
router.put("/:id",petController.atualizaPet);
router.delete("/:id",petController.deletaPet)

export default router;