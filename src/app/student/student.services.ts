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

export const studentServices = {
    getAllstudent
}