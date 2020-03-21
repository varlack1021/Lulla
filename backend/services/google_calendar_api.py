import google.oauth2.credentials
import google_auth_oauthlib.flow
from flask import url_for
#Using the google api client libary
#This handles tasks we would otherwise need to define
#Determines when the application can use refresh stored access tokens 
#Determines when the application must reacquire consent 
#Generates correct redirect URLS
#Helps to implement redirect handlers that exchange authorization codes for access tokens
def authenticate():
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
        'services/client_secret.json',
        #this is the scope
        ['https://www.googleapis.com/auth/calendar.addons.execute'])
    #will need to upate the redirect uri name in the google oath form
    flow.redirect_uri = 'https://localhost:5000/google'

    authorization_url, state = flow.authorization_url(
        access_type = 'offline',
        include_granted_scopes = 'true')

    return authorization_url

def callback(state, auth_response):
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
    'services/client_secret.json',
    scopes=['https://www.googleapis.com/auth/calendar.addons.execute'],
    state=state)
    #url_for builds a url so we do not need to generate the whole url
    flow.redirect_uri = url_for('googleCallBack')
    #test url
    #flow.redirect_uri = "https://localhost/"
    authorization_response = auth_response
    flow.fetch_token(authorization_response=authorization_response)
    pprint(jsonify(flow.credentials))
    return jsonify(flow.credentials)

