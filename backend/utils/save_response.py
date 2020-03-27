from database.base import db_session
from sqlalchemy import inspect


#turns the query object into a dic
#which allows to be printed
#for testing purposeses
def object_as_dict(obj):
    return {c.key: getattr(obj, c.key)
            for c in inspect(obj).mapper.column_attrs}

#for row in user:
#		print(object_as_dict(row))
def save_response(**kwargs):

	#will add conditional to check if email is already in use
	if str(kwargs['model']) == "<class 'database.users_model.ModelUser'>":
		query_result = db_session.query(kwargs['model']).filter_by(email=kwargs['data']['email']).first()
		if query_result:
			return "Email already in use"

		#first returns None if not found
	query_result = db_session.query(kwargs['model']).filter_by(id=15).first()

	if not query_result:
		new_model = kwargs['model'](**kwargs['data'])
		db_session.add(new_model)
	else:
		query_result.update(kwargs["response"])

	db_session.commit()

	return "Account Created"
