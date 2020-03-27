from .base import Base
from sqlalchemy import Column, ForeignKey, Integer, String

class ModelService(Base):

	__tablename__ = 'services'

	id = Column('id', Integer, primary_key=True)
	service = Column('service', String)
	passphrase = Column('passphrase', String)
	username = Column('username', String)
