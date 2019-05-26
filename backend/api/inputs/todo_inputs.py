import graphene

class EditableTodoAttributes:
    title = graphene.String(name='title', description='')
    description = graphene.String(name='description', description='')
    completed = graphene.Boolean(name='completed', description='')
    due_date = graphene.DateTime(name='dueDate', description='')
    parent_id = graphene.ID(name='parentId', description='')


class SelectorTodoAttributes:
    id = graphene.ID(name='id', description='')

class CreateTodoInput(graphene.InputObjectType, EditableTodoAttributes):
    '''Arguments to create a Todo.'''
    title = graphene.String(name='title', description='', required=True)

class DeleteTodoInput(graphene.InputObjectType, SelectorTodoAttributes):
    '''Arguments to delete a Todo.'''
    id = graphene.ID(name='id', description='', required=True)

class EditTodoInput(graphene.InputObjectType, SelectorTodoAttributes, EditableTodoAttributes):
    '''Arguments to edit a Todo.'''
    id = graphene.ID(name='id', description='', required=True)