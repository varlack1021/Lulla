from random import randint
from database.base import db_session

#generates a random unique identifier
#security feature to be updated
#possible soluton -> 64 bit unsigned ints
#this may also not need to be a module
def create_uid(model):
	min_ = 10000
	max_ = 10000000
	uid =  randint(min_, max_)

	while db_session.query(model).filter_by(id=uid).first() is not None:
		uid = randint(min_, max_)

	return uid