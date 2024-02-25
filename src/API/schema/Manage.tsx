// import { OrderState, lunchBoxType } from "../Enums"

export type GetManageDataResponse = {
    headerData: {
        paid: number,
        owed: number,
        daysUnordered: number,
    },
    bodyData: {
        state: string,
        date: number[],
        displayDate: string,
        id: string | null,
        lunchBox: string | "-",
        price: string | "-",
        selectedMeal: string | "-",
        mealOptions: {
            name: string,
            schoolOnly: boolean
        }[],
        locked: boolean
    }[]
}