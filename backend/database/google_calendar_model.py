from .base import Base
from sqlalchemy import Column, String, Integer

class ModelGoogleCalendar(Base):

	__tablename__ = 'google_calendar'

	id = Column('id', Integer, primary_key=True)
	access_token = Column('access_token', String)
	refresh_token = Column('refresh_token', String)
	token_uri = Column('token_uri', String)