from .base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from .users_model import ModelUser

class ModelTodoist(Base):

	__tablename__ = 'todoist'

	id = Column('id', Integer, primary_key=True)
	access_token = Column('access_token', String)
	token_type  = Column('Bearer', String)
	user_id = Column('user_id', Integer, ForeignKey('users.id'))
	user = relationship('ModelUser', backref="todoist", uselist=False)