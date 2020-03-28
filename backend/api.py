from flask import Flask, request, redirect, session, url_for
from database.base import db_session
from flask_graphql import GraphQLView
from schemas.schema import schema, Query
from services import todoist_api, google_calendar_api
from utils.save_to_database import save_to_database
from utils.passphrase import check_passphrase
from database.users_model import ModelUser
import yaml
import sys
import os
app = Flask(__name__)

app.add_url_rule(
	'/graphql',
	view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

#this is how we protect endpoints
#but what will we use to protect endpoints?
def login_required():
	pass

def shutdown_session(exception=None):
    db_session.remove()

@app.route('/login', methods=['POST'])
def login():
	if 'email' not in request.args or 'passphrase' not in request.args:
		return "Missing Arguments"

	if check_passphrase(email=request.args['email'], passphrase=request.args['passphrase']):
		session['logged_on'] = True
		print(session['logged_on'])
		#need to update session with secret key error
		return "True"
	else:
		return "Username or Password is incorrect"


@app.route('/create_account', methods=['POST'])
def create_account():
	data = {}
	#the request.arg is immutable dic but I need to process data
	#change the immutable dic to a dic
	for arg in request.args:
		data[arg] = request.args[arg]
	#this will route to somewhere else
	return save_to_database(model=ModelUser, data=data)


#-------------Todoist API----------------------
#uid is done - do we need to randomly generate?
#created one to one relationships, best way to do this?
#Added login system - how do we tell if user is logged in?
#Add error handling, encrypt access tokens, 
#then the actual preferrences


@app.route('/authtodoist', methods=['GET'])
def authenticateTodoist():
	
	authorization_url = todoist_api.authenticate()	
	return redirect(authorization_url)

@app.route('/todoistcallback', methods=['GET'])
def Todoistcallback():
	
	result = todoist_api.callback()
	#for now displays results for testing purposes
	#Will redirect back to app
	return result 

#----------------Google Calendar API----------------

@app.route('/authgoogle', methods=['GET'])
def authenticateGoogle():
	authorization_url = google_calendar_api.authenticate()
	return redirect(authorization_url)

#will have to change some naming conventions
@app.route('/google', methods=['GET'])
def googleCallBack():
	
	auth_response = request.url
	credentials = google_calendar_api.callback(auth_response)
	#to get uid of users could I query user by email?

	#Will ridirect back to the app
	return "Access token is: {} <br> Refresh token is {}".format(credentials.token, credentials.refresh_token)

if __name__ == '__main__':
	#context = ('cert.pem', 'key.pem')
	#add ssl_context='adhoc' as a arg for https - DEVELOPTMENT ONLY
	#need to change this pathing	
	dir = os.getcwd()
	configs = "services/credentials.yml"
	path = os.path.join(dir, configs)

	with open(path) as file:
		data = yaml.safe_load(file)	
	#needed to sign sessions
	SECRET_KEY = data['credentials']['Flask']['SECRET_KEY']
	app.secret_key = SECRET_KEY
	app.run(debug=True, host='0.0.0.0', port=5000)



