from utilities.db.db_manager import *
import base64

#add customers
customers = [
    {"email": "yuval@gmail.com",
     "password": "0528026060Yy",
     "nameFirst": "yuval",
     "nameLast": "danus",
     "phone": "0528026060",
     "coins": "4"},
    {"email": "omergi97@gmail.com",
     "password": "0528026061Yy",
     "nameFirst": "omer",
     "nameLast": "giron",
     "phone": "0545317373",
     "coins": "2"},
    {"email": "omergi@gmail.com",
     "password": "0528026062Yy",
     "nameFirst": "gili",
     "nameLast": "giron",
     "phone": "0545317371",
     "coins": "7"}
]

#for customer in customers:
#    insert_customer(customer)

#add products
with open("pages/jewelry/static/img/daniel.jpg", "rb") as image_file:
    image_data_daniel = base64.b64encode(image_file.read())

with open("pages/jewelry/static/img/daria.jpg", "rb") as image_file:
    image_data_daria = base64.b64encode(image_file.read())

with open("pages/jewelry/static/img/keren.jpg", "rb") as image_file:
    image_data_keren = base64.b64encode(image_file.read())

with open("pages/jewelry/static/img/hagar.jpg", "rb") as image_file:
    image_data_hagar = base64.b64encode(image_file.read())

products = [
    {"productID": "1",
     "name": "daniel",
     "price": "115",
     "inventory": "10",
     "material": "gold",
     "details": "צמיד פנינים",
     "image": image_data_daniel},
    {"productID": "2",
     "name": "keren",
     "price": "190",
     "inventory": "12",
     "material": "gold",
     "details": "צמיד אבנים זעירות אפור",
     "image": image_data_keren},
    {"productID": "3",
     "name": "daria",
     "price": "137",
     "inventory": "5",
     "material": "gold",
     "details": "צמיד אבנים זעירות בורדו",
     "image": image_data_daria},
    {"productID": "4",
     "name": "hagar",
     "price": "115",
     "inventory": "7",
     "material": "gold",
     "details": "צמיד אבנים זעירות טורקיז",
     "image": image_data_hagar}
]

#for product in products:
#    insert_products(product)

#add orders
orders = [
    {"orderID": "1",
     "phone": "0528026060",
     "address": "bialik,beer sheva",
     "order DT": "02/01/2024 12:45",
     "price": "115",
     "coins status": "12",
     "status": "done"},
    {"orderID": "2",
     "phone": "0528026060",
     "address": "bialik,beer sheva",
     "order DT": "10/01/2024 15:12",
     "price": "137",
     "coins status": "6",
     "status": "done"},
    {"orderID": "3",
     "phone": "0545317373",
     "address": "rager,beer sheva",
     "order DT": "02/02/2024 20:23",
     "price": "230",
     "coins status": "7",
     "status": "done"},
    {"orderID": "4",
     "phone": "0545317373",
     "address": "rager,beer sheva",
     "order DT": "10/03/2024 12:40",
     "price": "115",
     "coins status": "12",
     "status": "done"}
]

#for order in orders:
#    insert_orders(order)
