enum OrderState {
    PAID = "已繳費",
    UNPAID = "未繳費",
    UNORDERED = "未訂餐",
}

enum lunchBoxType {
    SCHOOL = "學校餐盒",
    PERSONAL = "自備餐盒",
}

type manageDataResponse = {
    headerData: {
        paid: number,
        owed: number,
        daysUnordered: number,
    },
    bodyData: [
        {
            // If state == PAID || UNPAID
            state: OrderState,

            date: Date,
            displayDate: string,
            id: string,
            lunchBox: lunchBoxType,
            mealOptions: [number],
            selectedMeal: string,
        } | {
            // If state == UNORDERED
            state: OrderState,

            date: Date,
            displayDate: string,
            mealOptions: [number]
        }
    ]
}
