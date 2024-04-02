from flask import Blueprint, render_template, url_for, session, request, redirect, flash
from utilities.db.db_initialize import *

jewelry = Blueprint(
    'jewelry',
    __name__,
    static_folder='static',
    static_url_path='/pages/jewelry',
    template_folder='templates'
)


@jewelry.route('/jewelry')
def index():
    return render_template('jewelry.html')


@jewelry.route('/addToCart')
def add_to_cart():
    if 'logged_in' in session:
        quantity = request.args["quantity"]
        product_name = request.args["productName"]
        product = find_product(product_name)
        if int(product["inventory"]) >= int(quantity):
            product_to_cart = {
                "email": session["email"],
                "productName": product["name"],
                "productPrice": product["price"],
                "quantity": quantity
            }
            subtract_inventory(product_name, quantity)
            insert_cart(product_to_cart)
            msg = "The product has been added to the shopping cart!"
        else:
            msg = "Sorry, the product is not available in stock in the required quantity"
    else:
        msg = "You must log in to the personal user to add to the shopping cart"
    return render_template('jewelry.html', message=msg)


