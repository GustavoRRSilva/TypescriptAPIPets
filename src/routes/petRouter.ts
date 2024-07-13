import express, { Response } from "express";
import PetController from "../controllers/PetController";
const router = express.Router();

const petController = new PetController();

router.post("/", petController.criapet);


export default router;