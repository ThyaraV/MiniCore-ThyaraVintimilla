import { useEffect,useState } from "react";
import {Row,Col} from 'react-bootstrap';
import Grade from "../../backend/models/gradeModel.js";
import axios from 'axios';

const HomeScreen=()=>{
    const[grades,setGrades]=useState([]);

    useEffect(()=>{
        const fetchGrades=async()=>{
            const{data}=await axios.get('/api/grades');
            setGrades(data);
        };
        fetchGrades();
    },[])

    return(
        <>
        <h1>Grades</h1>
        </>
    )
}

export default HomeScreen;