/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { userServieces } from './user.services';
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
