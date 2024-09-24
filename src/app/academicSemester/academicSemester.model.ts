import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const academicSemesterShcema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Date,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true
    },
    endMonth: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const academicSemesterModel = model<TAcademicSemester>("academicSemester", academicSemesterShcema)
export default academicSemesterModel