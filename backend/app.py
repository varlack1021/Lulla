# Imports
from flask import Flask
from database import db_session
from database.models import TodoDBModel
from api import schema
from flask_graphql import GraphQLView

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


if __name__ == '__main__':
     app.run(host="0.0.0.0")