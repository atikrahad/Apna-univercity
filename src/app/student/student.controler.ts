import { NextFunction, Request, Response } from "express";
import sendResponce from "../utils/sendResponce";
import { studentServices } from "./student.services";

const getAllstudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchTarm = req.params.searchTarm
        const result = await studentServices.getAllstudent(searchTarm)
        sendResponce(res, {
            stutasCode: 200,
            seccess: true,
            message: "Get all student data",
            data: result
        })
    } catch (err) {
        next(err)
    }
}

export const studentControlar = {
    getAllstudent
}