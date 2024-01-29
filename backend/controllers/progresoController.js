import asyncHandler from "../middleware/asyncHandler.js";
import Progreso from "../models/progresoModel.js";

const getProgreso=asyncHandler(async(req,res)=>{
    const progresos=await Progreso.find({});
    res.json(progresos);
});

const createProgreso = asyncHandler(async (req, res) => {
    const { name, startDate, endDate, peso } = req.body;

    const newProgreso = new Progreso({
        name,
        startDate,
        endDate,
        peso
    });

    const createdProgreso = await newProgreso.save();
    res.status(201).json(createdProgreso);
});

export {getProgreso,createProgreso}