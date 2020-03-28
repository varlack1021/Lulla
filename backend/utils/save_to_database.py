from database.base import db_session
from sqlalchemy import inspect

import bcrypt
from .create_uid import create_uid
from .passphrase import hash_passphrase
from .passphrase import check_passphrase
#turns the query object into a dic
#which allows to be printed
#for testing purposeses
def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}
	
#for row in user:
#		print(object_as_dict(row))
def save_to_database(**kwargs):
	#checks for model user
	#if so special processes must happen
	if str(kwargs['model']) == "<class 'database.users_model.ModelUser'>":
		#checks to see if user already made an account with the given email
		email = kwargs['data']['email']
		if db_session.query(kwargs['model']).filter_by(email=email).first():
			return "Email already in use"

		kwargs['data']['passphrase'] = hash_passphrase(kwargs['data']['passphrase'])

	#first returns None if not found
	#will query user model again
	#however trade would be to create a seperate module 
	#to save user model
	query_result = db_session.query(kwargs['model']).filter_by(id=19).first()
	if not query_result:
		kwargs['data']['id'] = create_uid(kwargs['model'])
		new_model = kwargs['model'](**kwargs['data'])
		db_session.add(new_model)
	else:
		query_result.update(kwargs["response"])

	db_session.commit()

	#this return is for testing
	return "Account Created"
