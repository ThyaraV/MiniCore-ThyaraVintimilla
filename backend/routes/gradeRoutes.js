import express from "express";
const router=express.Router();
import { getGrades,getGradesById } from "../controllers/gradeController.js";

router.route('/').get(getGrades);
router.route('/:id').get(getGradesById);

export default router;