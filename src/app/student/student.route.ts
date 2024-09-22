import { Router } from "express";
import { studentControlar } from "./student.controler";
import vallidate from "../middlewere/validation";
import { StudentUpdateValidation } from "./student.validation";

const studentRoute = Router()
studentRoute.get("/", studentControlar.getAllstudent)
studentRoute.put("/:id", vallidate(StudentUpdateValidation), studentControlar.updateStudent)
studentRoute.get("/:id", studentControlar.getSingleStudent)
export default studentRoute