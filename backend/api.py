from flask import Flask, request, redirect, jsonify, session, url_for
from database.base import db_session

from flask_graphql import GraphQLView
from schemas.schema import schema, Query

from services import todoist_api, google_calendar_api
from pprint import pprint
import json

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

@app.route('/authTodoist', methods=['GET'])
def authenticateTodoist():
	
	redirectUri = todoist_api.authenticate()	
	return redirect(redirectUri)

@app.route('/Todoistcallback', methods=['GET'])
def Todoistcallback():
	
	result = todoist_api.callback()
	#for now displays results for testing purposes
	#will add redirect back to app
	return result

#----------------Google Calendar API----------------

@app.route('/authgoogle', methods=['GET'])
def authenticateGoogle():

	authorization_url = google_calendar_api.authenticate()
	return redirect(authorization_url)

#will have to change some naming conventions
@app.route('/google', methods=['GET'])
def googleCallBack():
	state = request.args['state']
	print(state)
	auth_response = request.url
	credentials = google_calendar_api.callback(state, auth_response)

	#this will also return back to the app
	return jsonify(credentials)

if __name__ == '__main__':
	#context = ('cert.pem', 'key.pem')
	app.run(debug=True, host='0.0.0.0', port=5000, ssl_context='adhoc')
