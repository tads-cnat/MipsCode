from django.contrib import admin

from .models import Documentation, Profile, Project, Tutorial


class TutorialInline(admin.TabularInline):
    model = Tutorial
    extra = 0

class ProjectInline(admin.TabularInline):
    model = Project
    extra = 0

class UserAdmin(admin.ModelAdmin):
    model = Profile
    inlines = [TutorialInline,ProjectInline]

class DocumentationArea(admin.TabularInline):
    model = Documentation
    


admin.site.register(Profile,UserAdmin)
admin.site.register(Documentation)