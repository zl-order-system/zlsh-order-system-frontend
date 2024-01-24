import { lunchBoxType } from "./Enums"

type createManageDataRequest = {
    date: Date,
    lunchBox: lunchBoxType,
    selectedMeal: string,
}
type updateManageDataRequest = {
    id: string,
    lunchBox: lunchBoxType,
    selectedMeal: string,
}
type deleteManageDataRequest = {
    id: string,
}
