import catchAsync from "../utils/catchAsync";
import sendResponce from "../utils/sendResponce";
import { academicSemesterServices } from "./academicSemester.services";

const createAcademicSemester = catchAsync(async (req, res) => {

    const result = await academicSemesterServices.createAcademicSemester(req.body)

    sendResponce(res, {
        stutasCode: 200,
        seccess: true,
        message: "Successfully create a Academicsemester",
        data: result
    })

})

export const academicSemesterControlar = {
    createAcademicSemester
}