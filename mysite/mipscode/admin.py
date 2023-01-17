from django.contrib import admin

from .models import Profile, ProfileSettings, Tutorial, Repositorio, Documentation

class ProfileSettingsInline(admin.TabularInline):
    model = ProfileSettings
    extra = 0

    
class TutorialInline(admin.TabularInline):
    model = Tutorial
    extra = 0

class RepositorioInline(admin.TabularInline):
    model = Repositorio
    extra = 0

class UserAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,        {'fields': ['name']}),
        (None,        {'fields': ['email']}),
        (None,        {'fields': ['password']}),        
        (None,        {'fields': ['bio']}),
        (None,        {'fields': ['avatar']}),
        (None,        {'fields': ['user_type']}),
    ]
    inlines = [TutorialInline,RepositorioInline,ProfileSettingsInline]

class DocumentationArea(admin.TabularInline):
    model = Documentation


admin.site.register(Profile,UserAdmin)
admin.site.register(Documentation)