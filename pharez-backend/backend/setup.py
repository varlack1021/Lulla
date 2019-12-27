from ast import literal_eval
from database.services_model import ModelService
from database.users_model import ModelUser
from database import base
import logging
import sys
###This file simply loads data into a database
###Is not needed after running once
log = logging.getLogger(__name__)
logging.basicConfig(
	stream=sys.stdout,
	level=logging.INFO,
	format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


if __name__ == '__main__':
	log.info('Create database {}'.format(base.db_name))
	base.Base.metadata.create_all(base.engine)

	log.info('Insert service info into the database')
	
	with open('database/data/services.json', 'r') as file:
		data = literal_eval(file.read())
		for record in data:
			print(record)
			service = ModelService(**record)
			base.db_session.add(service)
		base.db_session.commit()
	