import { Router } from 'express';
import { academicSemesterControlar } from './academicSemester.controlar';
import vallidate from '../middlewere/validation';
import { academicSemesterValidation } from './academicSemester.validation';

const academicSemesterRoute = Router();

academicSemesterRoute.post('/', vallidate(academicSemesterValidation), academicSemesterControlar.createAcademicSemester);
academicSemesterRoute.get("/", academicSemesterControlar.getAllAcademicSemester)

export default academicSemesterRoute;
