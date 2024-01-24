import { OrderState, lunchBoxType } from "./Enums"

type GetHomeDataResponse = {
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
