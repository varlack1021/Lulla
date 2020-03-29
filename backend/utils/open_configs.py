import os
import yaml

def open_configs():						#opens config file
	dir = os.getcwd()					#will need to chage pathing
	configs = "services/credentials.yml"
	path = os.path.join(dir, configs)
	
	with open(path) as file:
			data = yaml.safe_load(file)

	return data['credentials']