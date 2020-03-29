from .base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship


class ModelUser(Base):

	__tablename__ = 'users'
	#SQL Alchemy did not like chaning id to something else
	id = Column('id', Integer, primary_key=True)
	email = Column('email', String)
	passphrase = Column('passphrase', String)
	user_name = Column('user_name', String)
	