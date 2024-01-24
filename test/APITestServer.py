from flask import Flask, request
from flask_cors import CORS
from creatFakeInfo import FakeInfo
import time
import json
app = Flask(__name__)
CORS(app)


with open('src/API/fakeInfo.json', 'r') as file:
    Home_Get_Data = json.load(file)["Home_GET"]
    Home_Get_Text = json.dumps(Home_Get_Data)

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

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")