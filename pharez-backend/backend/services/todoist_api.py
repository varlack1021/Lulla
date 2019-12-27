import requests
import yaml
from pprint import pprint
from todoist import TodoistAPI
from pprint import pprint
import json

session = requests.Session()


'''with open('services/credentials.yml') as file:
	data = yaml.safe_load(file)
testToken = data['credentials']['toDoistApi']['testToken']
api = TodoistAPI(token=testToken)
api.sync()
'''
code = "e1f6e973b473f04b6fd9d1c100d1e99801c1c96c"
url = "https://todoist.com/oauth/access_token?client_id=bd973b3f2c0f452d8bb8b5dc271b2115&client_secret=397847abcad1458b88e524db46c49ade&code={}".format(code)
data = session.post(url)
data = data.json()

pprint(data['access_token'])
#pprint(api.state['items'][2])
#session.headers.update(testToken)

url = "https://todoist.com/oauth/authorize?"
def auth():
	data = session.post("https://todoist.com/oauth/access_token?client_id=bd973b3f2c0f452d8bb8b5dc271b2115&client_secret=397847abcad1458b88e524db46c49ade&code=260a9eafe2025567ffcfba339fe89f22af620e8")
	pprint(data)


