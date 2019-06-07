import graphene
from .objects import TodoType as TodoAPI, resolve_get_todos
from .mutations import CreateTodos, DeleteTodos, EditTodos

class Query(graphene.ObjectType):
    get_todos = graphene.List(
        TodoAPI,
        everything=graphene.Boolean(),
        amount=graphene.Int(), 
        resolver=resolve_get_todos)

class Mutation(graphene.ObjectType):
    create_todos = CreateTodos.Field()
    delete_todos = DeleteTodos.Field()
    edit_todos = EditTodos.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)