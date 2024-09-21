import { Router } from "express";
import { studentControlar } from "./student.controler";

const studentRoute = Router()
studentRoute.get("/", studentControlar.getAllstudent)
export default studentRoute