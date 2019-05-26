from database import Session
from flask import Flask
from flask_graphql import GraphQLView
from schema import schema

app = Flask(__name__)
db_session = Session()


app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


if __name__ == '__main__':
    app.run(threaded=True, debug=True)

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
'''