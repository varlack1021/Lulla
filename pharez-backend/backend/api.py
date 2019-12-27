from database.base import db_session
from flask import Flask, request, redirect
from flask_graphql import GraphQLView
from schemas.schema import schema, Query
from services.google_calendar_api import google_login
from pprint import pprint
import requests
import os
import yaml
import random
import string

app = Flask(__name__)
app.add_url_rule(
	'/graphql',
	view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))


def shutdown_session(exception=None):
    db_session.remove()

@app.route('/', methods=['GET'])
def login():
	return "Connected Succesfully"
#---------- Todoist API----------------------
@app.route('/auth', methods=['GET'])
def authenticate():

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
 
@app.route('/todoist', methods=['GET'])
def Todoist():

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
	#url = "https://todoist.com/oauth/access_token?client_id=bd973b3f2c0f452d8bb8b5dc271b2115&client_secret=397847abcad1458b88e524db46c49ade&code={}".format(code)
	
	session = requests.Session()

	data = session.post(url)
	data = data.json()
	
	if 'access_token' not in data:
		return "400 Response"
	pprint(data)

	return "code is {} state is {} and the access_token is {}".format(request.args['code'], request.args['state'], data['access_token'])

#To run on local router, use external IP address in uri
if __name__ == '__main__':

  app.run(debug=True, host='0.0.0.0', port=5000)
