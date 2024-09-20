import { TStudent } from "../student/student.Interface"
import studentModel from "../student/student.Model"
import UserModel from "./user.model"

const StudentCreateService = async (password: string, student: TStudent) => {
    const id = "user11"
    const result = await UserModel.create({
        id: id,
        password: password,
        role: "student"
    })
    if (result) {
        const userId = result._id;
        const studentResult = await studentModel.create({
            user: userId,
            id: id,
            name: student.name,
            email: student.email,
            gender: student.gender,
            guardian: student.guardian,
            constactNo: student.constactNo,
            dateOfBirth: student.dateOfBirth,
            group: student.group,
            localGuardian: student.localGuardian,
            permenentAddress: student.permenentAddress,
            presentAddress: student.presentAddress,
            emergencyContactNo: student.emergencyContactNo,
            academicDepertMent: student.academicDepertMent,
            profileImg: student.profileImg,
        })
        return studentResult
    }
    else {
        throw new Error("someThing is wrong")
    }
}

export const userServieces = {
    StudentCreateService
}