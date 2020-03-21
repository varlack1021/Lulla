from graphene_sqlalchemy_filter import FilterableConnectionField, FilterSet
from graphene_sqlalchemy import SQLAlchemyObjectType
from database.services_model import ModelService
from database.base import db_session
from datetime import datetime
from utils import utils
import graphene
import hashlib
#The data that I want the client to have access to 
#Must match columns inside the table
class ServicesAttribute:
	service = graphene.String(description="The name of the service")
	passphrase = graphene.String(description="Passpharse for the service")	
	user_name = graphene.String(description="User Name for the service")
	#backendtask user_id = graphene.String(description="User Name for the service")
class Services(SQLAlchemyObjectType, ServicesAttribute):

	class Meta:
		model = ModelService
		interfaces = (graphene.relay.Node,)

class ServiceFilter(FilterSet):

	class Meta:
		model = ModelService
		fields = {
			'service': [...],
			
		}

class CreateServiceInput(graphene.InputObjectType, ServicesAttribute):
	pass	

class CreateService(graphene.Mutation):
	service = graphene.Field(lambda: Services, description="Service created by this mutation")

	class Arguments:
		input = CreateServiceInput(required=True)

	def mutate(self, info, input):
		data = utils.input_to_dictionary(input)
		#data['password'] = hash(data['password']) this is where I will return a JWT
		service = ModelService(**data)
		db_session.add(service)
		db_session.commit()

		return CreateService(service=service)


class UpdateServiceInput(graphene.InputObjectType, ServicesAttribute):
	pass


class UpdateService(graphene.Mutation):
	service = graphene.Field(lambda: Services, description="Update a service")

	class Arguments:
		input = UpdateServiceInput(required=True)

	def mutate(self, info, input):
		data = utils.input_to_dictionary(input)

		#filter_by refers to the columns or rows in the attributes
		service = db_session.query(ModelService).filter_by(service=data['service'])
		service.update(data)
		db_session.commit()
		service = db_session.query(ModelService).filter_by(service=data['service']).first()

		return UpdateService(service=service)

class RemoveServiceInput(graphene.InputObjectType, ServicesAttribute):
	pass
 
class RemoveService(graphene.Mutation):
	service = graphene.Field(lambda: Services,  description="Remove a service")

	class Arguments:
		input = RemoveServiceInput()

	def mutate(self, info ,input):
		data = utils.input_to_dictionary(input)

		service =  db_session.query(ModelService).filter_by(service=data['service'])
		service.delete()
		db_session.commit()
		return RemoveService(service="Removed {} service".format(data['service']))
		#return RemoveService(service=service)