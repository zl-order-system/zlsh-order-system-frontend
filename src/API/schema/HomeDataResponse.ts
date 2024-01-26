import { OrderState, lunchBoxType } from "./Enums"

type GetHomeDataResponse = {
    role: string,
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
