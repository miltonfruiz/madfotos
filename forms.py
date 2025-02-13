from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField, SubmitField, PasswordField
from wtforms.validators import DataRequired, Email, EqualTo, Length, Regexp, ValidationError
from flask_wtf.file import FileAllowed

class PhotoForm(FlaskForm):
    title = StringField('Título', validators=[DataRequired(), Length(min=3, max=100)])
    description = TextAreaField('Descripción', validators=[Length(max=500)])
    image = FileField('Imagen', validators=[
        DataRequired(),
        FileAllowed(['jpg', 'jpeg', 'png', 'gif'], 'Solo se permiten imágenes en formato JPG, JPEG, PNG o GIF.')
    ])
    submit = SubmitField('Subir Foto')

class RegisterForm(FlaskForm):
    username = StringField('Usuario', validators=[
        DataRequired(), 
        Length(min=3, max=50),
        Regexp('^[A-Za-z0-9_]+$', message="El nombre de usuario solo puede contener letras, números y guiones bajos.")
    ])
    email = StringField('Correo Electrónico', validators=[DataRequired(), Email()])
    password = PasswordField('Contraseña', validators=[
        DataRequired(),
        Length(min=6),
        Regexp('^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$', 
               message="La contraseña debe contener al menos una mayúscula, un número y un carácter especial.")
    ])
    confirm_password = PasswordField('Confirmar Contraseña', validators=[
        DataRequired(), 
        EqualTo('password', message="Las contraseñas deben coincidir.")
    ])
    submit = SubmitField('Registrarse')

class LoginForm(FlaskForm):
    email = StringField('Correo Electrónico', validators=[DataRequired(), Email()])
    password = PasswordField('Contraseña', validators=[DataRequired()])
    submit = SubmitField('Iniciar Sesión')