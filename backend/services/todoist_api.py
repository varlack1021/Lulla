from database.todoist_model import ModelTodoist
from todoist.api import TodoistAPI
from flask import request
from utils.save_to_database import save_to_database

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

def callback(user_id):

	data = open_configs()
	
	auth_uri = data['authUri']
	client_id = data['client_id']
	client_secret = data['client_secret']
	code = request.args['code']

	url = "{}client_id={}&client_secret={}&code={}".format(auth_uri, client_id, client_secret, code)
	
	session = requests.Session()
	data = session.post(url).json()

	if 'access_token' not in data:
		return "Todoist returned with a 400 response"
	save_to_database(user_id=user_id, model=ModelTodoist, data=data)
																
																#return method is not necessary
	return "code is {} state is {} and the access_token is {}".format(request.args['code'], request.args['state'], data['access_token']) #