import express from "express"
import { userControlar } from "./user.controlar"
const router = express.Router()

router.post("/create-student", userControlar.createStudent)

export const userRoute = router