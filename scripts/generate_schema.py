"""
🌩Dreamy Jy🌩 back at it again ⚡️...

This script generates a schema.graphql and a 
schema.json representing our backend's graphql 
schema.

NOTE: because of the state of constant change to 
the code base this script may not work in the 
future if not regularly updated.
"""
import sys
import json
from graphql.utils import schema_printer as sp

sys.path.insert(0, "/Users/jordanethomas/Projects/Mobile-Apps/Lula/backend/")

from app import schema #pylint: disable=E0401

schema_string = sp.print_schema(schema)
schema_file = open("schema.graphql", "w")
schema_file.write(schema_string)
schema_file.close()
