import { z } from "zod";

export const academicSemesterValidation = z.object({
    name: z.string({ message: "Semester name should be string" }),
    year: z.date({ message: "year must Date type" }),
    code: z.string({ message: "Semester code must string" }),
    startmonth: z.string(),
    endMonth: z.string()
})