from .base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from .services_model import ModelService

class ModelUser(Base):

	__tablename__ = 'users'

	id = Column('id', Integer, primary_key=True)
	email = Column('email', String)
	passphrase = Column('passphrase', String)
	user_name = Column('user_name', String)
	user_services = relationship('ModelService', backref='owner')