import { z, ZodSchema } from "zod";

export type GetAccountDataRes = {
  id: number,
  avatarUrl: string,
  name: string,
  googleName: string,
  email: string,
  classNumber: number,
  seatNumber: number
}

export const zGetAccountDataRes: ZodSchema<GetAccountDataRes> = z.object({
  id: z.number(),
  avatarUrl: z.string(),
  name: z.string(),
  googleName: z.string(),
  email: z.string(),
  classNumber: z.number(),
  seatNumber: z.number()
})
