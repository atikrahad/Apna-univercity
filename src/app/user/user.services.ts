import UserModel from "./user.model"

const StudentCreateService = async (id: string, password: string) => {
    const result = await UserModel.create({
        id: id,
        password: password,
        role: "student"
    })
    return result
}

export const userServieces = {
    StudentCreateService
}