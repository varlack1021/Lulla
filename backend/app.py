# Imports
from flask import Flask
from database import Session
from database.models import TodoDBModel
# import graphene
# from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from api import schema
from flask_graphql import GraphQLView

# TODO create a new naming system, to map concepts across the app.
# TODO add testing, and linting

# app initialization
app = Flask(__name__)
app.debug = True

# Configs
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
# app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# Modules
session = Session()

# Schema Objects
# class TodoObject(SQLAlchemyObjectType):
#     class Meta:
#         name = "Todo"
#         model = TodoDBModel
#         interfaces = (graphene.relay.Node, )

# class Query(graphene.ObjectType):
#     node = graphene.relay.Node.Field()
#     all_todos = SQLAlchemyConnectionField(TodoObject)

'''
class CreateTodo(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=False)
    
    todo = graphene.Field(lambda: TodoObject)
    
    def mutate(self, info, title, description=None):
        todo = Todo(title=title, info=description)        
        session.add(todo)
        session.commit()
        return CreateTodo(todo=todo)


class DeleteTodo(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
    
    todo = graphene.Field(lambda: TodoObject) # NOTE Why this Line?

    def mutate(self, info, id):
        todo = Todo.query.get(id)

        if todo is not None:
            session.delete(todo)
            session.commit()
        
        return todo


class ToggleTodo(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
    
    todo = graphene.Field(lambda: TodoObject)

    def mutate(self, info, id):
        todo = Todo.query.get(id)
        
        if todo is not None:
            todo.is_complete = not todo.is_complete
            session.commit()

        return todo


class Mutation(graphene.ObjectType):
    create_todo = CreateTodo.Field()
    delete_todo = DeleteTodo.Field()
    toggle_todo = ToggleTodo.Field()
    # TODO consider making an edit_todo mutation
'''

# schema = graphene.Schema(query=Query)#, mutation=Mutation)

# Routes
# TODO refactor this
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True,
        get_context=lambda : {'db_connection': session}
    )
)


@app.route('/')
def index():
    return '<p> Hello World</p>'


if __name__ == '__main__':
     app.run(host="0.0.0.0")