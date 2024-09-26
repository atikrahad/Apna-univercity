import { TAcademicSemester } from './academicSemester.interface';
import academicSemesterModel from './academicSemester.model';

const createAcademicSemester = async (academicSemester: TAcademicSemester) => {

  const academicSemesterNameandCode = {
    AlfhaTech: "01",
    BetaTech: "02",
    GamaTech: "03"
  }

  if (academicSemesterNameandCode[academicSemester.name] !== academicSemester.code) {
    throw new Error("Invalide semester code")
  }

  const result = await academicSemesterModel.create(academicSemester);
  return result;
};

const getAllAcademicSemester = async () => {
  const result = await academicSemesterModel.find()
  return result;
}

export const academicSemesterServices = {
  createAcademicSemester,
  getAllAcademicSemester
};
