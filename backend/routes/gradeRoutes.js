import express from "express";
import grades from "../data/grade.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Grade from "../models/gradeModel.js";

const router=express.Router();

router.get('/',asyncHandler(async(req,res)=>{
    const grades=await Grade.find({});
    res.json(grades);
}));

router.get('/:id',asyncHandler(async(req,res)=>{
    const grade=await Grade.findById(req.params.id);

    if(grade){
       return res.json(grade);
    }
    
    res.status(404).json({message:'Grade not found'})
}));

export default router;