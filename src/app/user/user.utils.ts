import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import UserModel from "./user.model";

export const generateId = async (academicSemester: TAcademicSemester) => {

    const lastId = await UserModel.findOne().sort({ "createdAt": -1 }).select({ "id": 1, "_id": 0 })
    const firstUser = parseInt(lastId?.id.slice(6)) + 1 || 0;
    const currentId = (firstUser).toString().padStart(4, '0')
    const id = `${academicSemester.year}${academicSemester.code}${currentId}`
    return id
}