from flask import Blueprint, render_template, url_for, request, session, flash
from utilities.db.db_initialize import *

navbar = Blueprint(
    'navbar',
    __name__,
    static_folder='static',
    static_url_path='/navbar',
    template_folder='templates'
)


@navbar.route('/login', methods=['POST'])
def login_func():
    if 'email' and 'Password' in request.form:
        email = request.form['email']
        password = request.form['Password']
        if find_customer(email, password):
            session['email'] = email
            session['userName'] = get_customer_name(email)
            session['coins'] = get_customer_coins(email)
            session['logged_in'] = 'True'
            return render_template('homePage.html')
        else:
            error_message = "Incorrect username or password. Please try again."
            return render_template('homePage.html', errorSI=error_message)


@navbar.route('/signUp', methods=['POST'])
def signup_func():
    email = request.form['email']
    if check_if_exist(email):
        error_message = "The user already exists in the system"
        return render_template('homePage.html', errorSU=error_message)
    else:
        customer = {"email": request.form['email'],
                    "password": request.form['Password'],
                    "nameFirst": request.form['First Name'],
                    "nameLast": request.form['Last Name'],
                    "phone": request.form['Phone Number'],
                    "coins": "0"}
        insert_customer(customer)
        session['email'] = email
        session['userName'] = get_customer_name(email)
        session['coins'] = get_customer_coins(email)
        session['logged_in'] = 'True'
        return render_template('homePage.html')


@navbar.route('/logout')
def logout():
    session.clear()
    return render_template('homePage.html')

