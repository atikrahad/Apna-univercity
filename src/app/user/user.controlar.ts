/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { userServieces } from './user.services';
import { StudentValidation } from '../student/student.validation';
import sendResponce from '../utils/sendResponce';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;

  const result = await userServieces.StudentCreateService(password, student);

  sendResponce(res, {
    stutasCode: httpStatus.OK,
    seccess: true,
    message: 'successfully create a student',
    data: result,
  });
});

export const userControlar = {
  createStudent,
};
