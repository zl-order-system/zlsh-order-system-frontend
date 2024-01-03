import { OrderState, lunchBoxType } from "./Enums"

type GetManageDataResponse = {
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
