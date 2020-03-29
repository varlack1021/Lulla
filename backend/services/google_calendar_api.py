from database.google_calendar_model import ModelGoogleCalendar
import google.oauth2.credentials
import google_auth_oauthlib.flow
from flask import url_for
from utils.save_to_database import save_to_database


#Using the google api client libary
#This handles tasks we would otherwise need to define
#Determines when the application can use refresh stored access tokens 
#Determines when the application must reacquire consent 
#Generates correct redirect URLS
#Helps to implement redirect handlers that exchange authorization codes for access tokens

#--------------------------------OAUTH2----------------------------
state = ''
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

def callback(authorization_response, user_id):                          #needs more error handling
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(     
    'services/client_secret.json',
    scopes=['https://www.googleapis.com/auth/calendar.addons.execute'],
    state=state)
    #flow.redirect_uri = url_for('googleCallBack')
    flow.redirect_uri = "https://localhost:5000/google"                 #savce redirect uri in configs or use flask url_for
    flow.fetch_token(authorization_response=authorization_response)

    #need to have error handling
    data = credentials_to_dict(flow.credentials)
    save_to_database(user_id=user_id, model=ModelGoogleCalendar, data=data)


    return flow.credentials                                             #does not need a return statement, will takeout once done testing


def credentials_to_dict(credentials):
  return {
          'access_token': credentials.token,
          'refresh_token': credentials.refresh_token,
          'token_uri': credentials.token_uri,
          } 
#--------------------------------API Functions--------------------

