from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import 	declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session
import os
###TODO put these in a yaml file
db_name = 'database.db'
db_path = os.path.join(os.path.dirname(__file__), db_name)
db_url = 'sqlite:///{}'.format(db_path)

engine = create_engine(db_url, convert_unicode=True)
Base = declarative_base()
Base.metadata.bind = engine

db_session = scoped_session(sessionmaker(bind=engine))

Base.query = db_session.query_property()