import graphene
from .objects import TodoType as Todo, resolve_get_todos


class Query(graphene.ObjectType):
    get_todos = graphene.List(
        Todo,
        everything=graphene.Boolean(),
        amount=graphene.Int(), 
        resolver=resolve_get_todos)

schema = graphene.Schema(query=Query)