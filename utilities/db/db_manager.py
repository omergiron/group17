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


# customers function
def get_list_of_customers():
    return list(customers_col.find())


def get_customer_name(email):
    result = customers_col.find({"email": email})
    first_name = result[0].get("nameFirst")
    last_name = result[0].get("nameLast")
    return first_name + " " + last_name


def get_customer_coins(email):
    result = customers_col.find({"email": email})
    return result[0].get("coins")


def insert_customer(customer_dict):
    customers_col.insert_one(customer_dict)


def find_customer(email, password):
    valid = False
    customers_list = get_list_of_customers()
    for customer in customers_list:
        if customer['email'] == email and customer['password'] == password:
            valid = True

    return valid


def check_if_exist(email):
    valid = False
    customers_list = get_list_of_customers()
    for customer in customers_list:
        if customer['email'] == email:
            valid = True

    return valid


# products function
def get_list_of_products():
    return list(products_col.find())


def insert_products(products_dict):
    products_col.insert_one(products_dict)


def find_product(name):
    products = get_list_of_products()
    for product in products:
        if product["name"] == name:
            return product


def subtract_inventory(name, quantity):
    my_query = {"name": name}
    product = products_col.find_one(my_query)
    new_inventory = int(product["inventory"]) - int(quantity)
    new_value = {"$set": {"inventory": new_inventory}}
    products_col.update_one(my_query, new_value)


def add_inventory(name):
    my_query = {"name": name}
    product = products_col.find_one(my_query)
    new_inventory = int(product["inventory"]) + 1
    new_value = {"$set": {"inventory": new_inventory}}
    products_col.update_one(my_query, new_value)


# cart function
def get_list_of_cart(email):
    my_query = {"email": email}
    user_cart = list(cart_col.find(my_query))
    return user_cart


def remove_item_from_cart(product_name, email):
    myquery = {"email": email, "productName": product_name}
    cart_col.delete_one(myquery)
    add_inventory(product_name)


def update_item_in_cart(product_name, quantity, email):
    myquery = {"email": email, "productName": product_name}
    new_quantity = int(quantity) - 1
    new_value = {"$set": {"quantity": new_quantity}}
    cart_col.update_one(myquery, new_value)
    add_inventory(product_name)


def total_payment(email):
    my_query = {"email": email}
    user_cart = list(cart_col.find(my_query))
    total = 0
    for p in user_cart:
        price = int(p["productPrice"]) * int(p["quantity"])
        total += price
    return total


def insert_cart(cart_dict):
    my_query = {"email": cart_dict["email"], "productName": cart_dict["productName"]}
    item_in_cart = cart_col.find_one(my_query)
    if str(item_in_cart) == 'None':
        cart_col.insert_one(cart_dict)
    else:
        new_quantity = int(cart_dict["quantity"]) + int(item_in_cart["quantity"])
        new_value = {"$set": {"quantity": new_quantity}}
        cart_col.update_one(my_query, new_value)


