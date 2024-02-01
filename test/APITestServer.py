from flask import Flask, request
from flask_cors import CORS
from creatFakeInfo import FakeInfo
import time
import json
app = Flask(__name__)
CORS(app)


with open('src/API/fakeInfo.json', 'r') as file:
    data = json.load(file)
    Home_Get_Data = data.get("Home_GET", {})
    Home_Get_Text = json.dumps(Home_Get_Data)
    account_Get_Data = data.get("account_GET", {})
    account_Get_Text = json.dumps(account_Get_Data)

with open('src/API/fakeMealsData.json', 'r') as file:
    data = json.load(file)
    mealsData = json.dumps(data, ensure_ascii=False)

@app.route('/manage',methods=["GET", "POST", "PUT", "DELETE"])
def manage():
    time.sleep(1)
    if request.method == "GET": #取得資訊
        return FakeInfo.creatManageData(5)
    elif request.method == "POST":  #新增預定
        return FakeInfo.creatManageData(5)
    elif request.method == "PUT":   #更新預定
        return FakeInfo.creatManageData(5)
    elif request.method == "DELETE":    #刪除預定
        return FakeInfo.creatManageData(5)
@app.route('/home',methods=["GET"])
def home():
    time.sleep(1)
    return Home_Get_Text
@app.route('/account',methods=["GET"])
def account():
    time.sleep(1)
    return account_Get_Text
@app.route('/meals', methods=["GET"])
def meals():
    time.sleep(1)
    return mealsData
@app.route('/messages', methods=["GET", "POST", "PUT", "DELETE"])
def messages():
    time.sleep(3)
    return "abcd123"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")