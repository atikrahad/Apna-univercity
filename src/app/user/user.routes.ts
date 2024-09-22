import express from "express"
import { userControlar } from "./user.controlar"
import vallidate from "../middlewere/validation"
import { StudentValidation } from "../student/student.validation"
const router = express.Router()

router.post("/create-student", vallidate(StudentValidation), userControlar.createStudent)

export const userRoute = router