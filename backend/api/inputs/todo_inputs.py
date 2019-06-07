import graphene
from database.constants import todo_title_description, todo_description_description, todo_completed_description, todo_due_date_description, todo_parent_id_description, todo_id_description

class EditableTodoAttributes:
    '''These are all attributes of todos that should be editable'''
    title = graphene.String(name='title', description=todo_title_description)
    description = graphene.String(name='description', description=todo_description_description)
    completed = graphene.Boolean(name='completed', description=todo_completed_description)
    due_date = graphene.DateTime(name='dueDate', description=todo_due_date_description)
    parent_id = graphene.ID(name='parentId', description=todo_parent_id_description)


class SelectorTodoAttributes:
    '''These are the attributes you can '''
    id = graphene.ID(name='id', description=todo_id_description)

class CreateTodoInput(graphene.InputObjectType, EditableTodoAttributes):
    '''Arguments to create a Todo.'''
    title = graphene.String(name='title', description=todo_title_description, required=True)

class DeleteTodoInput(graphene.InputObjectType, SelectorTodoAttributes):
    '''Arguments to delete a Todo.'''
    id = graphene.ID(name='id', description=todo_id_description, required=True)

class EditTodoInput(graphene.InputObjectType, SelectorTodoAttributes, EditableTodoAttributes):
    '''Arguments to edit a Todo.'''
    id = graphene.ID(name='id', description=todo_id_description, required=True)