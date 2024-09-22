/* eslint-disable @typescript-eslint/no-explicit-any */
import studentModel from "./student.Model"

const getAllstudent = async (searchTarm: string) => {
    if (searchTarm) {
        const result = await studentModel.find()
        return result
    } else {
        const result = await studentModel.find()
        return result
    }
}

const updateStudent = async (id: string, updateData: any) => {
    const result = await studentModel.findByIdAndUpdate(id, updateData)
    return result
}

export const studentServices = {
    getAllstudent,
    updateStudent
}