import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# get your uri from .env file
uri = os.environ.get('DB_URI')

# create cluster
cluster = MongoClient(uri, server_api=ServerApi('1'))

# get all dbs and collections that needed
myDatabase = cluster['group17']
customers_col = myDatabase['customers']
products_col = myDatabase['products']
cart_col = myDatabase['cart']


def get_list_of_customers():
    result = list(customers_col.find())
    print(result)


def get_list_of_products():
    result = list(products_col.find())
    print(result)


def get_cart_collection():
    result = list(cart_col.find())
    print(result)




