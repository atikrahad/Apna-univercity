import { z } from 'zod';

const nameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'firstname must 1 character' }).max(20, { message: 'firstname max 20 character' }),
  middleName: z.string().min(1, { message: 'firstname must 1 character' }).max(20, { message: 'firstname max 20 character' }).optional(),
  lastName: z.string().min(1, { message: 'firstname must 1 character' }).max(20, { message: 'firstname max 20 character' }),
});

const parentValidationSchema = z.object({
  father: z.object({
    name: nameValidationSchema,
    ocupation: z.string().min(1),
    contactNo: z.string().max(15),
  }),
  mother: z.object({
    name: nameValidationSchema,
    ocupation: z.string().min(1),
    contactNo: z.string().max(15),
  }),
});

export const StudentValidation = z.object({
  password: z.string().min(6, { message: 'Minimum pass 6 character' }),
  student: z.object({
    name: nameValidationSchema,
    gender: z.enum(['male', 'famale', 'others'], { required_error: 'gender is requerd' }),
    email: z.string({ required_error: 'Email is requerd' }).email({ message: 'invalid email format' }),
    dateOfBirth: z.string({ message: 'Date of Bitrh is required' }),
    constactNo: z.string({ required_error: 'contact number is requerd' }).max(15),
    emergencyContactNo: z.string({ required_error: 'contact number is requerd' }).max(15),
    group: z.enum(['sceince', 'arts', 'commerce'], { required_error: 'group is requerd' }),
    presentAddress: z.string().optional(),
    permenentAddress: z.string().optional(),
    guardian: parentValidationSchema,
    localGuardian: parentValidationSchema,
    academicDepertMent: z.string().optional(),
  }),
});

export const StudentUpdateValidation = z.object({
  name: nameValidationSchema.optional(),
  gender: z.enum(['male', 'famale', 'others'], { required_error: 'gender is requerd' }).optional(),
  email: z.string({ required_error: 'Email is requerd' }).email({ message: 'invalid email format' }).optional(),
  dateOfBirth: z.string({ message: 'Date of Bitrh is required' }).optional(),
  constactNo: z.string({ required_error: 'contact number is requerd' }).max(15).optional(),
  emergencyContactNo: z.string({ required_error: 'contact number is requerd' }).max(15).optional(),
  group: z.enum(['sceince', 'arts', 'commerce'], { required_error: 'group is requerd' }).optional(),
  presentAddress: z.string().optional(),
  permenentAddress: z.string().optional(),
  guardian: parentValidationSchema.optional(),
  localGuardian: parentValidationSchema.optional(),
  academicDepertMent: z.string().optional(),
});
