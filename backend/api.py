from flask import Flask, request, redirect, session, url_for
from database.base import db_session

from flask_graphql import GraphQLView
from schemas.schema import schema, Query

from services import todoist_api, google_calendar_api


app = Flask(__name__)

app.add_url_rule(
	'/graphql',
	view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))


def shutdown_session(exception=None):
    db_session.remove()

@app.route('/', methods=['GET'])
def login():
	return "Connected Succesfully"

#-------------Todoist API----------------------

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

	#Will ridirect back to the app
	return "Access token is: {} <br> Refresh token is {}".format(credentials.token, credentials.refresh_token)

if __name__ == '__main__':
	#context = ('cert.pem', 'key.pem')
	app.run(debug=True, host='0.0.0.0', port=5000, ssl_context='adhoc')
