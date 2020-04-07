import bcrypt
from database.base import db_session
from database.users_model import ModelUser

def hash_passphrase(passphrase):
	salt = bcrypt.gensalt(rounds=16)
	hashed = bcrypt.hashpw(passphrase.encode(), salt)
	return hashed

def check_passphrase(email, passphrase):
	user = db_session.query(ModelUser).filter_by(email=email).scalar()
	
	if bcrypt.checkpw(passphrase.encode(), user.passphrase):
		return user.id
	else:
		return None