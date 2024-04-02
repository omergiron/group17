from flask import Blueprint, render_template, url_for

personalArea = Blueprint(
    'personalArea',
    __name__,
    static_folder='static',
    static_url_path='/pages/personalArea',
    template_folder='templates'
)


@personalArea.route('/personalArea')
def index():
    return render_template('templates/personalArea.html')
