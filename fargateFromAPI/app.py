from flask import Flask
import requests

app = Flask(__name__)
BASE = "http://10.0.65.241:5000/"

@app.route("/")
def hello():
    return "Hello Python fargate !!! (API)"

@app.route("/api")
def node():
    response = requests.get(BASE + "api")
    return response.json()

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=4000, debug=True)
