import catchAsync from '../utils/catchAsync';
import sendResponce from '../utils/sendResponce';
import { academicSemesterServices } from './academicSemester.services';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemester(req.body);

  sendResponce(res, {
    stutasCode: 200,
    seccess: true,
    message: 'Successfully create a Academicsemester',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAllAcademicSemester()
  sendResponce(res, {
    stutasCode: 200,
    seccess: true,
    message: "Successfully get all academicsemester",
    data: result
  })
})

const getAvailableSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAvailableSemester()
  sendResponce(res, {
    stutasCode: 200,
    seccess: true,
    message: "Get available semester",
    data: result
  })
})

export const academicSemesterControlar = {
  createAcademicSemester,
  getAllAcademicSemester,
  getAvailableSemester
};
