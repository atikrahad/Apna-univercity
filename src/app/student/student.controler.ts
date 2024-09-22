/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import sendResponce from "../utils/sendResponce";
import { studentServices } from "./student.services";
import catchAsync from "../middlewere/catchAsync";
import { StudentUpdateValidation } from "./student.validation";

const getAllstudent = catchAsync(async (req, res,) => {

    const searchTarm = req.params.searchTarm
    const result = await studentServices.getAllstudent(searchTarm)
    sendResponce(res, {
        stutasCode: 200,
        seccess: true,
        message: "Get all student data",
        data: result
    })

})

const updateStudent = catchAsync(async (req, res,) => {
    const id = req.params.id
    const validationData = StudentUpdateValidation.parse(req.body)
    const result = await studentServices.updateStudent(id, validationData)

    sendResponce(res, {
        stutasCode: 200,
        seccess: true,
        message: "Student Data update successfully",
        data: result
    })
})

export const studentControlar = {
    getAllstudent,
    updateStudent
}