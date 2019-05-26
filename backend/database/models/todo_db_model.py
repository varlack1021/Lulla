from .. import Base
from sqlalchemy import Column, ForeignKey, Integer, DateTime, Boolean, String
from datetime import datetime

def insert_date_completed(context):
    '''
    The function used to set the todo\'s completed_date. 
    If the todo has been completed it returns the current
    datetime, otherwise it returns None.
    '''
    statment_params = context.get_current_parameters()
    if statment_params['completed']: # BUG when the UPDATE statment has no completed
        return datetime.utcnow()
    else:
        return None

def update_date_completed(context):
    '''
    '''
    statment_params = context.get_current_parameters()
    if 'completed' in statment_params:
        if statment_params['completed']:
            return datetime.utcnow()
        else:
            return None
    
    


class TodoDBModel(Base):
    '''Todo Database Model'''

    __tablename__ = 'todos'

    id = Column('id', Integer, primary_key=True, doc='This is the todo\'s ID.')
    title = Column('title', String, nullable=False, doc='This is the todo\'s ')
    description = Column('description', String, doc='')
    date_created = Column('date_created', DateTime, default=datetime.utcnow, nullable=False, doc='')
    completed = Column('completed', Boolean, default=False, nullable=False, doc='')
    date_completed = Column('date_completed', DateTime, default=insert_date_completed, onupdate=update_date_completed, doc='')
    due_date = Column('due_date', DateTime)
    parent_id = Column('parent_id', Integer, ForeignKey('todos.id'))

    def __repr__(self):
        return "<Todo(id={0}, title={1}, completion_status={2}, ...)>".format(self.id, self.title, self.completed)