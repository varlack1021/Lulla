# Imports
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField

from flask_graphql import GraphQLView

import datetime

basedir = os.path.abspath(os.path.dirname(__file__))

# app initialization
app = Flask(__name__)
app.debug = False

# Configs TODO
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# Modules TODO
db = SQLAlchemy(app)

# Constants TODO

TODO_TITLE_MAX_LENGTH = 50

# Models TODO
# Reformat TODO
class User(db.Model):
    __tablename__ = 'users'

    uuid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(256), index=True, unique=True)
    posts = db.relationship('Post', backref='author')

    def __repr__(self):
        return '<User %r>' % self.username

# Delete
class Post(db.Model):
    __tablename__ = 'posts'

    uuid = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), index=True)
    body = db.Column(db.Text)
    author_id = db.Column(db.Integer, db.ForeignKey('users.uuid'))

    def __repr__(self):
        return '<Post %r>' % self.title

class Todo(db.Model):
    __tablename__ = 'todos'
    
    uuid = db.Column(db.Integer, unique=True, nullable=False, primary_key=True)
    
    title = db.Column(db.String(TODO_TITLE_MAX_LENGTH), nullable=False)
    info = db.Column(db.Text)
    
    is_complete = db.Column(db.Boolean, nullable=False, default=False)
    creation_date_time = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow())
    
    def __repr__(self):
        return '<Todo %r>' % self.title


# class Event(db.Model):
#     pass


# Schema Objects TODO
class PostObject(SQLAlchemyObjectType):
    class Meta:
        model = Post
        interfaces = (graphene.relay.Node, )

class UserObject(SQLAlchemyObjectType):
    class Meta:
        model = User
        interfaces = (graphene.relay.Node, )

class TodoObject(SQLAlchemyObjectType):
    class Meta:
        model = Todo
        interfaces = (graphene.relay.Node, )

class Query(graphene.ObjectType):
    node = graphene.relay.Node.Field()
    all_posts = SQLAlchemyConnectionField(PostObject)
    all_users = SQLAlchemyConnectionField(UserObject)
    all_todos = SQLAlchemyConnectionField(TodoObject)

class CreatePost(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        body = graphene.String(required=True)
        username = graphene.String(required=True)

    post = graphene.Field(lambda: PostObject)

    def mutate(self, info, title, body, username):
        user = User.query.filter_by(username=username).first()
        post = Post(title=title, body=body)

        if user is not None:
            post.author = user
        
        db.session.add(post)
        db.session.commit()

        return CreatePost(post=post)


class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)

# Routes TODO
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