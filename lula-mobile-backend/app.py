# Imports
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from flask_graphql import GraphQLView
import datetime

basedir = os.path.abspath(os.path.dirname(__file__))

# TODO create a new naming system, to map concepts across the app.
# TODO add testing, and linting

# app initialization
app = Flask(__name__)
app.debug = True

# Configs
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# Modules
db = SQLAlchemy(app)

# Constants
TODO_TITLE_MAX_LENGTH = 50

# Models
# TODO Implement
# class User(db.Model):
#     __tablename__ = 'users'


class Todo(db.Model):
    __tablename__ = 'todos'
    
    uuid = db.Column(db.Integer, unique=True, nullable=False, primary_key=True)
    
    title = db.Column(db.String(TODO_TITLE_MAX_LENGTH), nullable=False)
    info = db.Column(db.Text)
    
    is_complete = db.Column(db.Boolean, nullable=False, default=False)
    creation_date_time = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow())
    
    def __repr__(self):
        return '<Todo %r>' % self.title

# TODO Implement
# class Event(db.Model):
#     __tablename__ = 'events'


# Schema Objects
class TodoObject(SQLAlchemyObjectType):
    class Meta:
        model = Todo
        interfaces = (graphene.relay.Node, )

class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()
    all_todos = SQLAlchemyConnectionField(TodoObject)


class CreateTodo(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=False)
    
    todo = graphene.Field(lambda: TodoObject)
    
    def mutate(self, info, title, description=None):
        todo = Todo(title=title, info=description)        
        db.session.add(todo)
        db.session.commit()
        return CreateTodo(todo=todo)


class DeleteTodo(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
    
    todo = graphene.Field(lambda: TodoObject) # NOTE Why this Line?

    def mutate(self, info, id):
        todo = Todo.query.get(id)

        if todo is not None:
            db.session.delete(todo)
            db.session.commit()
        
        return todo


class ToggleTodo(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
    
    todo = graphene.Field(lambda: TodoObject)

    def mutate(self, info, id):
        todo = Todo.query.get(id)
        
        if todo is not None:
            todo.is_complete = not todo.is_complete
            db.session.commit()

        return todo


class Mutation(graphene.ObjectType):
    create_todo = CreateTodo.Field()
    delete_todo = DeleteTodo.Field()
    toggle_todo = ToggleTodo.Field()
    # TODO consider making an edit_todo mutation

schema = graphene.Schema(query=Query, mutation=Mutation)

# Routes
# TODO refactor this
app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True
    )
)


@app.route('/')
def index():
    return '<p> Hello World</p>'


if __name__ == '__main__':
     app.run(host="0.0.0.0")