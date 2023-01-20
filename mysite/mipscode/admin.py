from django.contrib import admin

from .models import Profile, Tutorial, Repositorio, Documentation

   
class TutorialInline(admin.TabularInline):
    model = Tutorial
    extra = 0

class RepositorioInline(admin.TabularInline):
    model = Repositorio
    extra = 0

class UserAdmin(admin.ModelAdmin):
    model = Profile
    inlines = [TutorialInline,RepositorioInline]

class DocumentationArea(admin.TabularInline):
    model = Documentation


admin.site.register(Profile,UserAdmin)
admin.site.register(Documentation)