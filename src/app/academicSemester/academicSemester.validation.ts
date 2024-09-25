import { z } from 'zod';

export const academicSemesterValidation = z.object({
  name: z.enum(["AlfhaTech", "BetaTech", "GamaTech"] as const),
  year: z.string({ message: 'year must String type' }),
  code: z.enum(["01", "02", "03"] as const),
  startMonth: z.enum(["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"] as const),
  endMonth: z.enum(["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"] as const),
});
