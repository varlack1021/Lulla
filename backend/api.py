from database.base import db_session
from flask import Flask, request, redirect, jsonify, session, url_for
from flask_graphql import GraphQLView
from schemas.schema import schema, Query

from services.google_calendar_api import google_login
import google.oauth2.credentials
import google_auth_oauthlib.flow

from pprint import pprint
import requests
import os
import yaml
import random
import string
import json

app = Flask(__name__)
app.add_url_rule(
	'/graphql',
	view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))
app.secret_key = "JWADWADCWEAYOOI"

def shutdown_session(exception=None):
    db_session.remove()

@app.route('/', methods=['GET'])
def login():
	return "Connected Succesfully"

#-------------Todoist API----------------------

@app.route('/authTodoist', methods=['GET'])
def authenticateTodoist():

	dir = os.getcwd()
	configs = "services/credentials.yml"
	path = os.path.join(dir, configs)
	
	with open(path) as file:
			data = yaml.safe_load(file)

	data = data['credentials']['TodoistAPI']
	redirectUri = data['redirectUri']
	client_id = data['client_id']
	scope = data['scope']
	state = ''.join([random.choice(string.ascii_uppercase) for x in range(random.randrange(10, 20))])
	redirectUri += "client_id={}&scope={}&state={}".format(client_id, scope, state)
	
	return redirect(redirectUri)
 
@app.route('/Todoistcallback', methods=['GET'])
def Todoistcallback():

	dir = os.getcwd()
	configs = "services/credentials.yml"
	path = os.path.join(dir, configs)

	with open(path) as file:
		data = yaml.safe_load(file)

	data = data['credentials']['TodoistAPI']
	auth_uri = data['authUri']
	client_id = data['client_id']
	client_secret = data['client_secret']
	code = request.args['code']

	url = "{}client_id={}&client_secret={}&code={}".format(auth_uri, client_id, client_secret, code)
	
	session = requests.Session()

	data = session.post(url)
	data = data.json()
	
	if 'access_token' not in data:
		return "400 Response"
	pprint(data)

	return "code is {} state is {} and the access_token is {}".format(request.args['code'], request.args['state'], data['access_token'])


#----------------Google Calendar API----------------

#Using the google api client libary
#This handles tasks we would otherwise need to define
#Determines when the application can use refresh stored access tokens 
#Determines when the application must reacquire consent 
#Generates correct redirect URLS
#Helps to implement redirect handlers that exchange authorization codes for access tokens

if __name__ == '__main__':

  app.run(debug=True, host='0.0.0.0', port=8080)
