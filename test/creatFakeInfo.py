import random
import json
from datetime import date, datetime, timedelta

mealOptions = ["小王子", "紅燒肉蒸蛋蓋飯", "涼麵", "皮蛋瘦肉粥", "味增湯麵", "鍋貼", "關東煮"]
weekdays = ["日", "一", "二", "三", "四", "五", "六"]

class FakeInfo():
    @staticmethod
    def creatManageData(days):
        data = {
            "headerData": {
                "paid": 0, 
                "owed": 0, 
                "daysUnordered": 0
            },
            "bodyData": []
        }
        threeTypeDays = {}
        threeTypeDays["paid"] = random.randint(0, days)
        threeTypeDays["owed"] = random.randint(0, days-threeTypeDays["paid"])
        threeTypeDays["daysUnordered"] = days-threeTypeDays["paid"]-threeTypeDays["owed"]
        current_date = datetime.now().date()
        for i in range(days):
            itemData = {}
            randomNum = random.randint(0, 2)
            if  randomNum == 0:
                itemData["state"] = "已繳費"
            elif randomNum == 1:
                itemData["state"] = "未繳費"
            else:
                itemData["state"] = "未訂餐"
            itemData["displayDate"] = (current_date + timedelta(days=i)).strftime("%m/%d 週") + weekdays[int((current_date + timedelta(days=i)).strftime("%w"))]
            randomNum = random.randint(3, 6)
            itemData["mealOptions"] = []
            for i in range(randomNum):
                r = random.randint(0, len(mealOptions)-1)
                if mealOptions[r] not in itemData["mealOptions"]:
                    itemData["mealOptions"].append(mealOptions[r])
            if itemData["state"] == "已繳費" or itemData["state"] == "未繳費":
                randomNum = random.randint(0, len(itemData["mealOptions"])-1)
                itemData["id"] = randomNum
                itemData["selectedMeal"] = itemData["mealOptions"][randomNum]
                randomNum = random.randint(0,1)
                if randomNum:
                    itemData["lunchBox"] = "自備餐盒"
                    itemData["price"] = "65"
                else:
                    itemData["lunchBox"] = "學校餐盒"
                    itemData["price"] = "70"
            else:
                itemData["id"] = "-"
                itemData["lunchBox"] = "-"
                itemData["price"] = "-"
                itemData["selectedMeal"] = "-"

            data["bodyData"].append(itemData)
        for i in data["bodyData"]:
            if i["state"] == "已繳費":
                data["headerData"]["paid"] += int(i["price"])
            elif i["state"] == "未繳費":
                data["headerData"]["owed"] += int(i["price"])
            elif i["state"] == "未訂餐":
                data["headerData"]["daysUnordered"] += 1
        return json.dumps(data, ensure_ascii=False)