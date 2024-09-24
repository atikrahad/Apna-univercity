import { Router } from "express";
import { academicSemesterControlar } from "./academicSemester.controlar";

const academicSemesterRoute = Router()

academicSemesterRoute.post("/", academicSemesterControlar.createAcademicSemester)

export default academicSemesterRoute