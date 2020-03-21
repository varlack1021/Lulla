from graphql_relay.node.node import from_global_id
from hashlib import sha256

def input_to_dictionary(input):
	#"Converts Graphene inputs to a dictionary"
	dictionary = {}
	print(input)
	for key in input:
		
		print("input keys are {}".format(input))
		print(key[-2:])
		
		if key[-2:] == 'id':
			print("hello {}".format(key))
			input[key] = from_global_id(input[key])[1]

		if key == 'passphrase':
			pass
			#hash the passharse
				
		dictionary[key] = input[key]
		print(dictionary)
	
	return dictionary