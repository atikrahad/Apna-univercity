import { TAcademicSemester } from './academicSemester.interface';
import academicSemesterModel from './academicSemester.model';

const createAcademicSemester = async (academicSemester: TAcademicSemester) => {
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
