from flask import Blueprint, render_template, request, redirect, session
from utilities.db.db_initialize import *
import base64


cart = Blueprint(
    'cart',
    __name__,
    static_folder='static',
    static_url_path='/pages/cart',
    template_folder='templates'
)


@cart.route('/cart')
def index():
    if 'email' in session:
        user_cart = get_list_of_cart(session["email"])
        total_pay = total_payment(session["email"])
        return render_template('cart.html', userCart=user_cart, total_pay=total_pay, msg=True)
    else:
        return render_template('cart.html', msg=True)


@cart.route('/deleteItem')
def delete_item():
    product_name = request.args["item_name"]
    product_quantity = request.args["item_quantity"]
    if int(product_quantity) > 1:
        update_item_in_cart(product_name, product_quantity, session["email"])
    else:
        remove_item_from_cart(product_name, session["email"])
    user_cart = get_list_of_cart(session["email"])
    total_pay = total_payment(session["email"])
    return render_template('cart.html', userCart=user_cart, total_pay=total_pay)
