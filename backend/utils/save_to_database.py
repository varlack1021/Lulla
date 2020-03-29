from database.base import db_session
from database.users_model import ModelUser
from sqlalchemy import inspect

from .create_uid import create_uid
from .passphrase import hash_passphrase
from .passphrase import check_passphrase

import bcrypt

#-----May Rewrite file for readability---------------


def object_as_dict(obj):													#prints the model attributes
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}
	
#for row in user:
#		print(object_as_dict(row))

def save_user_data(kwargs):
	email = kwargs['data']['email']
	if db_session.query(kwargs['model']).filter_by(email=email).first():	#checks to see if user already made an account with the given email

		return "Email already in use"

	kwargs['data']['passphrase'] = hash_passphrase(kwargs['data']['passphrase'])
	kwargs['data']['id'] = create_uid(kwargs['model'])

	new_model = kwargs['model'](**kwargs['data'])
	db_session.add(new_model)
	db_session.commit()
	return "Account Created"

def save_services_data(kwargs):

	query_result = db_session.query(kwargs['model']).filter_by(user_id=kwargs['user_id'])																			
	
	if not query_result.first():											#.first() will return None if not found
		kwargs['data']['id'] = create_uid(kwargs['model'])
		kwargs['data']['user_id'] = kwargs['user_id']
		new_model = kwargs['model'](**kwargs['data'])
		db_session.add(new_model)
	else:
		query_result.update(kwargs["data"])									#if we use .first() here then the object will not have the update attribute

	db_session.commit()
	return "Data Added"

def save_to_database(**kwargs):
	if str(kwargs['model']) == "<class 'database.users_model.ModelUser'>":	
		save_user_data(kwargs)
	else:
		save_services_data(kwargs)




