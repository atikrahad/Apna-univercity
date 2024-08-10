import mongoose from 'mongoose';
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
        phoneNo: z.string().min(1),
    }),
    mother: z.object({
        name: nameValidationSchema,
        ocupation: z.string().min(1),
        phoneNo: z.string().min(1),
    }),
});

export const StudentValidation = z.object({
    user: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), { message: 'User not found!' }),
    name: nameValidationSchema,
    gender: z.enum(["male", "famale", "others"], { required_error: "gender is requerd" }),
    email: z.string(({ required_error: "Email is requerd" })).email(({ message: "invalid email format" })),
    dateOfBirth: z.date({ message: "invalid date format" }),
    constactNo: z.string(({ required_error: "contact number is requerd" })).length(11),
    emergencyContactNo: z.string(({ required_error: "contact number is requerd" })).length(11),
    group: z.enum(["scince", "arts", "comerce"], { required_error: "group is requerd" }),
    presentAddress: z.string().optional(),
    permenentAddress: z.string().optional(),
    guardian: parentValidationSchema,
    localGuardian: parentValidationSchema,
    academicDepertMent: z.string().optional()
});
