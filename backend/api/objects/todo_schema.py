'''
All classes and functions involved in the definition and quering of the
`Todo` object type.
'''
from graphene_sqlalchemy import SQLAlchemyObjectType
from database.models import TodoDBModel
from ..constants import todo_api_schema_description


class TodoType(SQLAlchemyObjectType):
    '''
    Todo GraphQL API Schema.
    
    This schema is defined by the SQLAlchemy database model `TodoDBModel`.
    Please check the database/model/todo_db_model.py for further implementation
    details.
    '''

    class Meta:
        name = "Todo"
        model = TodoDBModel
        description = todo_api_schema_description


def resolve_get_todos(todo, info, everything=False, amount=5):
    '''
    This is the resolver that used to get todos from the database.

    Parameters:
        `amount`: 
        If `all` is set to True, all values of amount are overridden. 
    '''
    db = info.context.get('db_connection')
    data = db.query(TodoDBModel).all()
    return data if everything else data[:amount]
    

"""
Can I build a whole database in 10 mins(realistic timebased on my keystrokes per min.)?

"""