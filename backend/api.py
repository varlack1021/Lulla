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
Learn to configure database with the create_engine() keyword arguments.
Learn to add documentation to your tables with the Column() keyword argments.
Find the best session type for your application.
Learn to work with the declarative_base().

Resolve __init__.py & base.py. Then remove base.py

QUESTIONS
Where should I have the session declared?

'''