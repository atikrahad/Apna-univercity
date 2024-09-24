import { TAcademicSemester } from "./academicSemester.interface";
import academicSemesterModel from "./academicSemester.model";

const createAcademicSemester = async (academicSemester: TAcademicSemester) => {

    const result = await academicSemesterModel.create(academicSemester)
    return result

}

export const academicSemesterServices = {
    createAcademicSemester
}