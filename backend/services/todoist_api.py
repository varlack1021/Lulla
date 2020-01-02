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
data = session.post(url)
data = data.json()

pprint(data['access_token'])
#pprint(api.state['items'][2])
#session.headers.update(testToken)

url = "https://todoist.com/oauth/authorize?"
def auth():
	pprint(data)


