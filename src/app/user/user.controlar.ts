import { RequestHandler } from "express";
import { userServieces } from "./user.services";

const createStudent: RequestHandler = async (req, res) => {
    try {
        const { password, id } = req.body
        const result = await userServieces.StudentCreateService(password, id)
        res.status(200).json({
            success: true,
            message: "Successfully create user",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err,

        })
    }
}

export const userControlar = {
    createStudent
}