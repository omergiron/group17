from flask import Blueprint, render_template, url_for

contact = Blueprint(
    'contact',
    __name__,
    static_folder='static',
    static_url_path='/pages/contact',
    template_folder='templates'
)


@contact.route('/contact')
def index():
    return render_template('contact.html')
