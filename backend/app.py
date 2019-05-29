# Imports
from flask import Flask
from flask_graphql import GraphQLView
from database import db_session
from api import schema

from constants import db_key

# TODO create a new naming system, to map concepts across the app.
# TODO add testing, and linting

app = Flask(__name__)
app.debug = True

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True,
        get_context=lambda : {db_key: db_session}
    )
)


@app.route('/')
def index():
    return '<p> Hello World</p>'

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


if __name__ == '__main__':
     app.run(host="0.0.0.0", debug=True, threaded=True)

'''
~~~ NOTE: Database
TODO
[] Learn to configure database with the create_engine() keyword arguments.
[] Learn to add documentation to your tables with the Column() keyword argments.
[X] Find the best session type for your application.
[] Learn to work with the declarative_base().

Resolve __init__.py & base.py. Then remove base.py

QUESTIONS
Where should I have the session declared?

~~~ NOTE: API
TODO
[] Have tight control over api behavour:
- [] implement error throws, and fail states
- [] have tight control over api behavior w/ GQL typing (not null)

optimize your resolvers with a look through the Query API.
Compare the Query delete() and the Session delete()
- https://docs.sqlalchemy.org/en/13/orm/query.html#sqlalchemy.orm.query.Query.delete

- determine your primary container for the API Objects:
The Database Model or the Schema

- look into how to use the Field() class.

- Why does the delete_todos mutation work?


Create seperate mechanisms for permanent and temporary deletion. 
'''
'''NOTE: Challenges
Can I build a whole database in 10 mins(realistic timebased on my keystrokes per min.)?
'''