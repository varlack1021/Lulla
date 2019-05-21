import graphene
from ..inputs import CreateTodosInput
from ..objects import TodoType as TodoAPI
from database.models import TodoDBModel as TodoDB
from constants import db_key


class CreateTodo(graphene.Mutation):
    class Arguments:
        todo_data_list = graphene.List(graphene.NonNull(CreateTodosInput), required=True)
    
    todo_list = graphene.Field(graphene.List(TodoAPI))

    def mutate(self, info, todo_data_list):
        db = info.context.get(db_key)
        todo_list = []
        
        for todo_data in todo_data_list:
            todo = TodoDB(**todo_data)
            db.add(todo)
            todo_list.append(todo)
        
        db.commit()
        return CreateTodo(todo_list=todo_list)