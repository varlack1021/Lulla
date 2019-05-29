from .. import Base
from sqlalchemy import Column, ForeignKey, Integer, DateTime, Boolean, String
from datetime import datetime
from ..constants import todo_completed_description, todo_date_completed_description, todo_description_description, todo_due_date_description, todo_id_description, todo_parent_id_description, todo_title_description, todo_date_created_description

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
    The function used to update the todo\'s completed_date. 
    If the todo's completed column is being updated then it returns a value.
    If completed is being set to true it returns the current datetime, if 
    completed is being set false it returns None.
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

    id = Column('id', Integer, primary_key=True, doc=todo_id_description)
    title = Column('title', String, nullable=False, doc=todo_title_description)
    description = Column('description', String, doc=todo_description_description)
    date_created = Column('date_created', DateTime, default=datetime.utcnow, nullable=False, doc=todo_date_created_description)
    completed = Column('completed', Boolean, default=False, nullable=False, doc=todo_completed_description)
    date_completed = Column('date_completed', DateTime, default=insert_date_completed, onupdate=update_date_completed, doc=todo_date_completed_description)
    due_date = Column('due_date', DateTime, doc=todo_due_date_description)
    parent_id = Column('parent_id', Integer, ForeignKey('todos.id'), doc=todo_parent_id_description)

    def __repr__(self):
        return "<Todo(id={0}, title={1}, completion_status={2}, ...)>".format(self.id, self.title, self.completed)