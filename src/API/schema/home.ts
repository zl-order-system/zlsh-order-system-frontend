import { ZodSchema, z } from "zod";

export type GetHomeDataRes = {
  roles: string[],
  bannerData: {
    today: Date,
    hasPaidToday: boolean,
    owed: number,
    daysOrdered: number,
  },
  previewData: {
    date: Date,
    ordered: boolean,
  }[]
}

export const zGetHomeDataRes: ZodSchema<GetHomeDataRes> = z.object({
  roles: z.array(z.string()),
  bannerData: z.object({
    today: z.date(),
    hasPaidToday: z.boolean(),
    owed: z.number(),
    daysOrdered: z.number(),
  }),
  previewData: z.array(z.object({
    date: z.date(),
    ordered: z.boolean(),
  }))
})
