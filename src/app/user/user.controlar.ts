/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from "express";
import { userServieces } from "./user.services";
import { StudentValidation } from "../student/student.validation";
import sendResponce from "../utils/sendResponce";
import httpStatus from "http-status";

const createStudent: RequestHandler = async (req, res, next) => {
    try {
        const { password, student } = req.body
        const studentInputValidate: any = StudentValidation.parse(student)
        const result = await userServieces.StudentCreateService(password, studentInputValidate)

        sendResponce(res, {
            stutasCode: httpStatus.OK,
            seccess: true,
            message: "successfully create a student",
            data: result
        })

    } catch (err) {
        next(err)

    }
}

export const userControlar = {
    createStudent
}