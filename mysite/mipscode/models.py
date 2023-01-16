import datetime
from django.db import models
from django.utils import timezone
from PIL import Image



class UserNew(models.Model):
    name = models.CharField(max_length = 250)
    email = models.EmailField(max_length = 250)
    password = models.CharField(max_length = 150)
    bio = models.TextField(default='Biografia do Usuário')
    avatar = models.ImageField(upload_to='avatar', default='avatar/default.jpg')

    types_users = [
        ('1', 'Admin'),
        ('2', 'Student'),
        ('3', 'Teacher'),
    ]

    user_type = models.CharField(max_length=1, choices=types_users, default='2')



class UserSettings(models.Model):
    user = models.ForeignKey(UserNew, on_delete = models.CASCADE, null=False)

    types_themes = [
        ('1', 'Dark'),
        ('2', 'Light'),
    ]

    languages = [
        ('1', 'Português'),
        ('2', 'Inglês'),
    ]

    ide_theme =  models.CharField(max_length=1, choices=types_themes, default='1')
    language = models.CharField(max_length=1, choices=languages, default='1')
    email_notification = models.BooleanField(default=True)


class Tutorial(models.Model):
    user = models.ForeignKey(UserNew, on_delete = models.CASCADE, null=True)

    title = models.CharField(max_length = 150)
    description = models.CharField(max_length = 300)
    content = models.JSONField(null=True)

    created_at = models.DateTimeField('Created Date', default=timezone.now())
    

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.data <= now

    def __str__(self):
        return self.title

class Repositorio(models.Model):
    user = models.ForeignKey(UserNew, on_delete = models.CASCADE)
    title = models.CharField(max_length = 50)
    description = models.CharField(max_length = 250)
    favorite = models.BooleanField(default=False)
    content = models.JSONField(null=True) #alterar para JSONField() e salvar o objeto 'sys' daquele projeto como json
    created_at = models.DateTimeField('Created Date', default=timezone.now())

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.data <= now

    def __str__(self):
        return self.title

class Documentation(models.Model):
    title = models.CharField(max_length = 50)
    content = models.JSONField(null=True)
    
    def __str__(self):
        return self.title