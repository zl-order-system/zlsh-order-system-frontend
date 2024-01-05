from flask import Flask, request
from flask_cors import CORS
from creatFakeInfo import FakeInfo

app = Flask(__name__)
CORS(app)

@app.route('/manage',methods=["GET", "POST", "PUT", "DELETE"])
def manage():
    if request.method == "GET": #取得資訊
        return FakeInfo.creatManageData(5)
    elif request.method == "POST":  #新增預定
        return FakeInfo.creatManageData(5)
    elif request.method == "PUT":   #更新預定
        return "PUT"
    elif request.method == "DELETE":    #刪除預定
        return "DELTE"

if __name__ == '__main__':
    app.run(debug=True)