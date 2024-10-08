import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';

const academicSemesterShcema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: ["AlfhaTech", "BetaTech", "GamaTech"],
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    enum: ["01", "02", "03"],
    required: true,
  },
  startMonth: {
    type: String,
    enum: ["January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"],
    required: true,
  },
  endMonth: {
    type: String,
    enum: ["January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

academicSemesterShcema.pre("save", async function (next) {
  const isSemesterExist = await academicSemesterModel.findOne({
    name: this.name,
    year: this.year
  })
  if (isSemesterExist) {
    throw new Error("AcademicSemester already exist")
  }
  next()
})

const academicSemesterModel = model<TAcademicSemester>('academicSemester', academicSemesterShcema);
export default academicSemesterModel;
