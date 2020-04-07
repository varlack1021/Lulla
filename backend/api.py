from flask import Flask, request, redirect, session, url_for
from database.base import db_session
from flask_graphql import GraphQLView
from schemas.schema import schema, Query
from services import todoist_api, google_calendar_api
from utils.save_to_database import save_to_database
from utils.passphrase import check_passphrase
from utils.open_configs import open_configs
from database.users_model import ModelUser

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

#---------------Login System----------------------

@app.route('/test', methods=['GET'])
def test():
	session['logged_on'] = True
	session['user_id'] = "1557"
	data= {"access_token": "15dfeght"}
	save_to_database(model=ModelTodoist, user_id=session['user_id'], data=data)
	return "Logged on potentially {}".format(session['user_id'])

@app.route('/login', methods=['POST'])
def login():
	if 'email' not in request.args or 'passphrase' not in request.args:
		return "Missing Arguments"

	user_id = check_passphrase(email=request.args['email'], passphrase=request.args['passphrase'])
	
	if (_id):	
		session['logged_on'] = True
		session['user_id'] = user_id
		return "True"
	else:
		return "Username or Password is incorrect"


@app.route('/create_account', methods=['POST'])
def create_account():
	data = {}

	if "email" not in request.args or 'passphrase' not in request.args:
		return "Missing Argumets"
														
	for arg in request.args:							#changes immutable dic to dic#
		data[arg] = request.args[arg]					#since I need to add data to the dic
						

	return save_to_database(model=ModelUser, data=data) #will redirect back to app


#-------------Todoist API----------------------
#uid is done - do we need to randomly generate?
#created one to one relationships, currently mapped one to one?
#Added login system - use session to determine if logged on
#Need to add error handling, encrypt access tokens, 
#then the actual preferrences


@app.route('/authtodoist', methods=['GET'])
def authenticateTodoist():
	
	authorization_url = todoist_api.authenticate()	
	return redirect(authorization_url)

@app.route('/todoistcallback', methods=['GET'])
def Todoistcallback():
	
	result = todoist_api.callback(session['user_id'])		#for now displays results for testing purposes
	return result 											#will redirect back to app

#----------------Google Calendar API----------------

@app.route('/authgoogle', methods=['GET'])
def authenticateGoogle():
	
	authorization_url = google_calendar_api.authenticate()
	return redirect(authorization_url)	

@app.route('/google', methods=['GET'])						#will need to change naming conventions
def googleCallBack():										#if changed, must be updated in GCP
	
	auth_response = request.url
	credentials = google_calendar_api.callback(auth_response, session['user_id'])
	return "Access token is: {} <br> Refresh token is {}".format(credentials.token, credentials.refresh_token) # will redirect back to app

if __name__ == '__main__':
	
	data = open_configs()
	SECRET_KEY = data['Flask']['SECRET_KEY']
	app.secret_key = SECRET_KEY 							#need to sign sessions
																		
	app.run(debug=True, host='0.0.0.0', port=5000, ssl_context='adhoc') #add ssl_context='adhoc' as a arg for https - DEVELOPTMENT ONLY
																		#generates a new certificate each time the server runs
																		#which does not allow us to configure the certificate to be
																		#trusted by the browser


