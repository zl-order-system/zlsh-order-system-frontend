import { OrderState, lunchBoxType } from "./Enums"

type GetHomeDataResponse = {
    role: string,   // USER || ADMIN
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
