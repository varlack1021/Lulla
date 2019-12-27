from graphene_sqlalchemy_filter import FilterableConnectionField, FilterSet
from graphene_sqlalchemy import SQLAlchemyObjectType
from database.base import db_session
from database.users_model import ModelUser
from datetime import datetime
import graphene
import utils
import hashlib

class UserAttributes:
	user_name = graphene.String(description="User name of the user")
	email = graphene.String(description="Email of the user")
	passphrase = graphene.String(description="Passphrase for the user")
	#user_services = graphene.String(description="List of services owned by the user")

class Users(SQLAlchemyObjectType, UserAttributes):
	class Meta:
		model = ModelUser

class UserFilter(FilterSet):
	class Meta:
		model = ModelUser
		fields = {
		'user_name':  [...]
		}
class CreateUserInput(graphene.InputObjectType, UserAttributes):
	pass

class CreateUser(graphene.Mutation):
	user = graphene.Field(lambda: Users, description="User created by this muation")

	class Arguments:
		input = CreateUserInput(required=True)

	def mutate(self, info, input):
		data = utils.input_to_dictionary(input)
		print(data)
		user = ModelUser(**data)
		db_session.add(user)
		db_session.commit()

		return CreateUser(user=user)