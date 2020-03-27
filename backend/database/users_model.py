from .base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from .todoist_model import ModelTodoist

class ModelUser(Base):

	__tablename__ = 'users'

	id = Column('id', Integer, primary_key=True)
	email = Column('email', String)
	passphrase = Column('passphrase', String)
	user_name = Column('user_name', String)
	todoist_id = Column('todoist_id', Integer, ForeignKey('todoist.id'))
	todoist = relationship('ModelTodoist', backref="users", uselist=False)
