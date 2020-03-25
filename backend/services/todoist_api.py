from database.todoist_model import ModelTodoist
from todoist.api import TodoistAPI
from flask import request
from utils import save_response

import requests
import random
import string
import yaml
import json
import os

'''
---------Todist API Example-------------
I want to keep this for future use

session = requests.Session()

with open('services/credentials.yml') as file:
	data = yaml.safe_load(file)
testToken = data['credentials']['TodoistAPI']['testToken']
api = TodoistAPI(token=testToken)
api.sync()





for state in api.state:
	print(state)
url = "https://todoist.com/oauth/authorize?"
'''

#--------------Authentication------------
def open_configs():
	
	dir = os.getcwd()
	configs = "services/credentials.yml"
	path = os.path.join(dir, configs)
	
	with open(path) as file:
			data = yaml.safe_load(file)

	return data['credentials']['TodoistAPI']	

def authenticate():

	data = open_configs()

	redirectUri = data['redirectUri']
	client_id = data['client_id']
	scope = data['scope']
	state = ''.join([random.choice(string.ascii_uppercase) for x in range(random.randrange(10, 20))])
	
	redirectUri += "client_id={}&scope={}&state={}".format(client_id, scope, state)
	return redirectUri

def callback():

	data = open_configs()
	
	auth_uri = data['authUri']
	client_id = data['client_id']
	client_secret = data['client_secret']
	code = request.args['code']

	url = "{}client_id={}&client_secret={}&code={}".format(auth_uri, client_id, client_secret, code)
	
	session = requests.Session()
	response = session.post(url).json()
	#add error handling here
	if 'access_token' not in response:
		return "400 Response"
	
	#this method will also need to pass the uid
	save_response.save_response(id=3, new_model=ModelTodoist(**response), model=ModelTodoist, response=response)
	#code does not need a return method
	return "code is {} state is {} and the access_token is {}".format(request.args['code'], request.args['state'], response['access_token'])