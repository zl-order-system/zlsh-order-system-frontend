export type GetHomeDataResponse = {
  bannerData: {
      today: number[],
      hasPaidToday: boolean,
      owed: number,
      daysOrdered: number,
  },
  previewData: {
      date: number[],
      ordered: boolean,
  }[],
}
