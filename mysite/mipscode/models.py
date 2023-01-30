import datetime

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone
from PIL import Image


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(default='', max_length=150, null=True)
    bio = models.TextField(default='Biografia do Usuário')
    avatar = models.ImageField(
        upload_to='avatar/', default='avatar/default.jpg')

    types_profiles = [
        ('1', 'Admin'),
        ('2', 'Student'),
        ('3', 'Teacher'),
    ]

    user_profile = models.CharField(
        max_length=1, choices=types_profiles, default='2')

    types_themes = [
        ('1', 'Dark'),
        ('2', 'Light'),
    ]

    languages = [
        ('1', 'Português'),
        ('2', 'Inglês'),
    ]

    ide_theme = models.CharField(
        max_length=1, choices=types_themes, default='1')
    language = models.CharField(max_length=1, choices=languages, default='1')
    email_notification = models.BooleanField(default=True)


class Tutorial(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300)
    content = models.JSONField()
    levels = [
        ('1', 'fácil'),
        ('2', 'médio'),
        ('3', 'dificil'),
    ]

    level = models.CharField(max_length=1, choices=levels, default='1')

    created_at = models.DateTimeField('Created Date', default=timezone.now())

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.data <= now

    def __str__(self):
        return self.title


class Project(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    favorite = models.BooleanField(default=False)
    content = models.TextField(null=True)
    created_at = models.DateTimeField('Created Date', default=timezone.now())
    edited_at = models.DateTimeField('Edited Date', default=timezone.now())

    def __str__(self):
        return self.title


class Documentation(models.Model):
    title = models.CharField(max_length=50)
    content = models.JSONField(null=True)

    def __str__(self):
        return self.title
