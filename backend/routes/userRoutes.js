import express from "express";
const router=express.Router();
import {
    getUsers,
    getUserByID,
    getUserProfile
} from "../controllers/userController.js";



router.route('/').get(getUsers);
router.get('/profile',getUserProfile);
router.get('/:id',getUserByID);


export default router;