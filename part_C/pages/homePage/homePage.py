from flask import Blueprint, render_template, url_for, session

homePage = Blueprint(
    'homePage',
    __name__,
    static_folder='static',
    static_url_path='/pages/homePage',
    template_folder='templates'
)


@homePage.route('/')
def index():
    return render_template('homePage.html')
