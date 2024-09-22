import { Router } from "express";
import { studentControlar } from "./student.controler";

const studentRoute = Router()
studentRoute.get("/", studentControlar.getAllstudent)
studentRoute.put("/:id", studentControlar.updateStudent)
export default studentRoute