import graphene

class EditableTodoAttributes:
    title = graphene.String(name='title', description='')
    description = graphene.String(name='description', description='')
    completed = graphene.Boolean(name='completed', description='')
    due_date = graphene.DateTime(name='dueDate', description='')
    parent_id = graphene.ID(name='parentId', description='')


class SelectorTodoAttributes:
    id = graphene.ID(name='id', description='')

class CreateTodosInput(graphene.InputObjectType, EditableTodoAttributes):
    '''Arguments to create a Todo.'''
    title = graphene.String(name='title', description='', required=True)

class DeleteTodosInput(graphene.InputObjectType):
    '''Arguments to delete a Todo.'''
    pass

class EditTodoInput(graphene.InputObjectType):
    '''Arguments to edit a Todo.'''
    pass