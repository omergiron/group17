from flask import Flask, session
from utilities.db.analyzeDB import *

# App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

# Pages
# homePage
from pages.homePage.homePage import homePage

app.register_blueprint(homePage)

# contact
from pages.contact.contact import contact

app.register_blueprint(contact)

# jewelry
from pages.jewelry.jewelry import jewelry
app.register_blueprint(jewelry)

# payment
from pages.payment.payment import payment

app.register_blueprint(payment)

# personalArea
from pages.personalArea.personalArea import personalArea

app.register_blueprint(personalArea)

# cart
from pages.cart.cart import cart

app.register_blueprint(cart)

# navbar
from components.navbar.navbar import navbar

app.register_blueprint(navbar)
