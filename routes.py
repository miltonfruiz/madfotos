from flask import Blueprint, render_template, redirect, url_for, request, flash
from flask_login import login_required, current_user
from models import db, Photo
from forms import PhotoForm

main = Blueprint('main', __name__)

@main.route('/')
def home():
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))
    return render_template('presentacion.html')

@main.route('/galeria')
@login_required
def index():
    photos = Photo.query.all()
    return render_template('index.html', photos=photos)

@main.route('/add', methods=['GET', 'POST'])
@login_required
def add_photo():
    form = PhotoForm()
    if form.validate_on_submit():
        title = form.title.data
        description = form.description.data
        photo = Photo(title=title, description=description)
        db.session.add(photo)
        db.session.commit()
        flash('Foto agregada con éxito.', 'success')
        return redirect(url_for('main.index'))
    return render_template('photo_form.html', form=form)

@main.route('/delete/<int:photo_id>', methods=['POST'])
@login_required
def delete_photo(photo_id):
    photo = Photo.query.get_or_404(photo_id)
    db.session.delete(photo)
    db.session.commit()
    flash('Foto eliminada.', 'success')
    return redirect(url_for('main.index'))