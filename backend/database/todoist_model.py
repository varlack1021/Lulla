from .base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship


class ModelTodoist(Base):

	__tablename__ = 'todoist'

	id = Column('id', Integer, primary_key=True)
	access_token = Column('access_token', String)
	token_type  = Column('Bearer', String)
