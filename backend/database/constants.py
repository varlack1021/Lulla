'''
This file contains all the constants associated with database
functionality.
'''

# Database URL
db_dialect = 'sqlite:///' 
db_path = '/Users/jordanethomas/Projects/Mobile-Apps/Lula/backend/database/data/'
db_file_name = 'todos.sqlite'
db_url = db_dialect+db_path+db_file_name

'''
NOTE sqlite won't be used in the future therefore our database URLs
will look radically different below are some variables that make more
sense in the future


Generalized database URL > dialect+driver://username:password@host:port/database
^ taken from: https://docs.sqlalchemy.org/en/13/core/engines.html
 - @Dreamy Jy
'''
db_driver, db_username, db_password, db_host, db_port = [None, None, None, None, None]
# Database URL

# Todo Database Model
todo_id_description = 'The unique identifier(id) of the todo.'
todo_title_description = 'The title of the todo. Also serves a short description of what should be done.'
todo_description_description = 'An involved description of the todo.'
todo_date_completed_description = 'A datetime string containing the date and time when the todo was completed. Is null when the todo\'s complete value is set to false, and resets it\'s value everytime todo is set to true.'
todo_completed_description = 'A boolean representing whether or not the todo has been completed.'
todo_due_date_description = 'A datetime string containing the date and time when the todo should be completed.'
todo_parent_id_description = 'The ID of this todo\'s parent todo.'
todo_date_created_description = 'A datetime string containing the date and time when the todo was created.'
# Todo Database Model
