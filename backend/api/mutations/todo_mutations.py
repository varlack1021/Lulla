import graphene
from ..inputs import CreateTodoInput, DeleteTodoInput, EditTodoInput
from ..objects import TodoType as TodoAPI
from database.models import TodoDBModel as TodoDB
from constants import db_key

'''
!!WARNING!!: None of these mutations been tested comprehensivily. Please test before product usable.
'''

class CreateTodos(graphene.Mutation):
    '''
    A mutation to create todos
    '''
    class Arguments:
        todo_data_list = graphene.List(graphene.NonNull(CreateTodoInput), required=True)

    created_todo_list = graphene.Field(graphene.List(TodoAPI))

    def mutate(self, info, todo_data_list):
        '''
        Adds todos to the database, given a list of objects containing the data they should be initialized with.

        !!Warning!! this mutatation is untested in handling parent_id inputs, and is still can't deal with local
        parenting.
        '''
        db = info.context.get(db_key)
        todo_list = []
        
        for todo_data in todo_data_list:
            todo = TodoDB(**todo_data)
            db.add(todo)
            todo_list.append(todo)
        
        db.commit()
        return CreateTodos(created_todo_list=todo_list)

class DeleteTodos(graphene.Mutation):
    '''
    A mutation to delete todos.
    '''
    class Arguments:
        todo_id_list = graphene.List(graphene.NonNull(DeleteTodoInput), required=True)
    
    deleted_todo_list = graphene.Field(graphene.List(TodoAPI))

    def mutate(self, info, todo_id_list):
        '''
        Deletes todos permanently from the database, give a list of their ids.
        '''
        db = info.context.get(db_key)
        deleted = []

        for todo_id in todo_id_list:
            todo = db.query(TodoDB).get(todo_id)

            if todo != None:
                deleted.append(todo)
                db.delete(todo)
        
        db.commit()

        return DeleteTodos(deleted_todo_list=deleted)

class EditTodos(graphene.Mutation):
    '''
    A mutation to edit todos.
    '''
    class Arguments:
        todo_and_edit_list = graphene.List(graphene.NonNull(EditTodoInput), required=True)
    
    edited_todo_list = graphene.Field(graphene.List(TodoAPI))

    # TODO find a more elegant way to do this.
    def mutate(self, info, todo_and_edit_list):
        db = info.context.get(db_key)
        edited_todo_list = []

        for edits in todo_and_edit_list:
            todo = db.query(TodoDB).get(edits['id'])
            for k in edits.keys():
                if k == 'title':
                    todo.title = edits['title']
                elif k == 'description':
                    todo.description =  edits['description']
                elif k == 'completed':
                    todo.completed =  edits['completed']
                elif k == 'due_date':
                    todo.due_date =  edits['due_date']
                elif k == 'parent_id':
                    todo.parent_id =  edits['parent_id']
                elif k == 'id':
                    pass
                else:
                    pass # catch error
            
            edited_todo_list.append(todo)
        
        db.commit()
        
        return EditTodos(edited_todo_list = edited_todo_list)

        