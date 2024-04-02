from flask import Blueprint, render_template, url_for

payment = Blueprint(
    'payment',
    __name__,
    static_folder='static',
    static_url_path='/pages/payment',
    template_folder='templates'
)


@payment.route('/payment')
def index():
    return render_template('payment.html')
