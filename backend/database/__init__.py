"""
The `database` package encapsulates all the database management capabilities and exposes it to the rest of the app.

Data models can be found in models(`database.models`) subpackage.
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from .constants import db_url

engine = create_engine(db_url)
Base = declarative_base()
Session = sessionmaker(bind=engine)