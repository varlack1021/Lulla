from .base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship
from .users_model import ModelUser

class ModelGoogleCalendar(Base):

	__tablename__ = 'google_calendar'

	id = Column('id', Integer, primary_key=True)
	access_token = Column('access_token', String)
	refresh_token = Column('refresh_token', String)
	token_uri = Column('token_uri', String)
	user_id = Column('user_id', Integer, ForeignKey('users.id'))
	user = relationship('ModelUser', backref="google_calendar", uselist=False)