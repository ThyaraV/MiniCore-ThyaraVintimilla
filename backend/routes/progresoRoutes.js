import express from "express";
const router=express.Router();
import { getProgreso,createProgreso } from "../controllers/progresoController.js";

router.route('/').get(getProgreso).post(createProgreso);;

export default router;