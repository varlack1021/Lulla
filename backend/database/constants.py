'''
This code contains all the constants associated with database
functionality.
'''

# Database URL
db_dialect = 'sqlite:///' 
db_path = '/Users/jordanethomas/Projects/Mobile-Apps/Lula/backend/database/data/'
db_file_name = 'todos.db'
db_url = db_dialect+db_path+db_file_name

'''
NOTE sqlite won't be used in the future
therefore our database URLs will look radically different
below are some variables that make more sense in the future


Generalized database URL > dialect+driver://username:password@host:port/database
^ taken from: https://docs.sqlalchemy.org/en/13/core/engines.html
 - @Dreamy Jy
'''
db_driver, db_username, db_password, db_host, db_port = [None, None, None, None, None]
# Database URL

# Todo Database Model
todo_id_description = 'The unique identifier(id) of the todo.'
todo_title_description = ''
todo_description_description = ''
todo_date_completed_description = ''
todo_completed_description = ''

# Todo Database Model