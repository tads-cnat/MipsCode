# Importações de autenticação e login
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin

# Importações de gerenciamento de arquivos e imagens
from PIL import Image
from django.core.files.storage import FileSystemStorage

# Importações de views e shortcuts
from django.http import HttpResponseRedirect
from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.utils import timezone
from django.views import View
from django.views.generic import TemplateView

# Importações de modelos
from .models import Documentation, Profile, Project, Tutorial

# Outras importações
from json import loads
import uuid
import time

# Importações de gerenciamento de querys
from django.db.models import Q


class IndexView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse('mipscode:dashboard'))
        documentation_all = Documentation.objects.all()
        context = {
            "documentationfirst": int(documentation_all.first().pk),
            "title": "inicio"                                                 
        }
        return render(request, "mipscode/index.html", context)


class LoginView(View):
    template_name = 'mipscode/login.html'
    documentation_all = Documentation.objects.all()  

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse('mipscode:dashboard'))

        context = {
            "documentationfirst": int(self.documentation_all.first().pk)
        }
        return render(request, self.template_name,context)

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = self._authenticate_user(request, username, password)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('mipscode:index'))
        else:        
            context = {
                "documentationfirst": int(self.documentation_all.first().pk),
                'error_message': 'Usuário ou senha incorretos!'}
            return render(request, self.template_name, context)

    def _authenticate_user(self, request, username, password):
        return authenticate(request, username=username, password=password)


class RegistrationView(View):
    template_name = 'mipscode/registration.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        username = request.POST.get('user')
        email = request.POST.get('email')
        password = request.POST.get('password')
        context = {}

        if self._user_exists(email):
            context['error_message'] = 'Já existe uma conta com esse email.'
        else:
            user = self._create_user(username, email, password)
            if user:
                profile = Profile.objects.create(user=user, name=username)
                profile.save()
                return HttpResponseRedirect(reverse('mipscode:login'))
        return render(request, self.template_name, context)

    def _user_exists(self, email):
        return User.objects.filter(email=email).exists()

    def _create_user(self, username, email, password):
        try:
            user = User.objects.create_user(
                username=email, password=password, email=email)
            user.save()
            return user
        except:
            return None


class DocumentationView(View):
    def get(self, request, *args, **kwargs):
        profile = ""
        name = ""
        if request.user.is_authenticated:
            profile = Profile.objects.get(user=request.user)
            name = " ".join(profile.name.split(" ")[:2])
        documentation = get_object_or_404(Documentation, pk=kwargs['pk'])
        documentation_itens = documentation.content

        documentation_all = Documentation.objects.all()
        # next_documentation = 
        context = {
            "name": name,
            "documentation": documentation,
            "documentation_itens": documentation_itens,
            "documentation_all":  documentation_all,
            "title": "documentation",
            "profile": profile,
            "documentationfirst": int(documentation_all.first().pk),
        }

        

        return render(request, "mipscode/documentation.html", context)


class IdeView(View):
    def get(self, request, *args, **kwargs):
        documentation_all = Documentation.objects.all()
        context = {
            "documentationfirst": int(documentation_all.first().pk),
            "title": "ide",}
        return render(request, "mipscode/ide.html", context)


class IdeProjectView(IdeView):
    def get(self, request, *args, **kwargs):
        project = get_object_or_404(Project, pk=kwargs['pk'])
        profile = Profile.objects.get(user=request.user)
        name = " ".join(profile.name.split(" ")[:2])
        documentation_all = Documentation.objects.all()
        context = {
            "profile": profile,
            "title": "ideproject",
            "project": project,
            "name": name,
            "documentationfirst": int(documentation_all.first().pk),
        }

        return render(request, "mipscode/ide.html", context)

    def post(self, request, *args, **kwargs):
        textarea = request.POST.get('content')
        title = request.POST.get('title')
        description = request.POST.get('description')

        Project.objects.filter(pk=kwargs['pk']).update(content=textarea, title=title, description=description, edited_at=timezone.now())
        project = Project.objects.get(pk=kwargs['pk'])
        return HttpResponseRedirect(reverse('mipscode:ideproject', kwargs={'pk': project.pk}))


class DashboardView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        projects = Project.objects.filter(user=profile).order_by('-edited_at')[:4]
        tutorials_all = Tutorial.objects.all()[:8]
        name = " ".join(profile.name.split(" ")[:2])

        documentation_all = Documentation.objects.all()
        context = {
            "name": name,
            "profile": profile,
            "projects": projects,
            "tutorials_all": tutorials_all,
            "title": "dashboard",
            "now": timezone.now(),
            "documentationfirst": int(documentation_all.first().pk),
        }
        return render(request, "mipscode/dashboard.html", context)

    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)

        title = request.POST.get('title')
        description = request.POST.get('description')
        file = request.POST.get('content_file')

        def handle_uploaded_file(f):
            return f.read().decode()

        if file and file.content_type == 'text/plain':
            content = handle_uploaded_file(file)

        Project.objects.create(user=profile, title=title, description=description,
                               content=content, created_at=timezone.now())

        return HttpResponseRedirect(reverse('mipscode:dashboard'))


class RepositoryView(View):
    def get(self, request, *args, **kwargs):
        title_page = "repository"
        profile = Profile.objects.get(user=request.user)
        name = " ".join(profile.name.split(" ")[:2])
        projects_all = Project.objects.filter(
            user=profile).order_by('-edited_at')
        
        documentation_all = Documentation.objects.all()
        context = {
            'name': name,
            'profile': profile,
            'projects_all': projects_all,
            'title': title_page,
            'documentationfirst': int(documentation_all.first().pk)
            }
        return render(request, "mipscode/repository.html", context)

    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)

        title = request.POST.get('title')
        description = request.POST.get('description')
        file = request.FILES.get('upload')
        content = ""

        def handle_uploaded_file(f):
            return f.read().decode()

        if file and file.content_type == 'text/plain':
            content = handle_uploaded_file(file)

        CreateProject = Project.objects.create(user=profile, title=title, description=description, content=content, created_at=timezone.now(), edited_at=timezone.now())
        return HttpResponseRedirect(reverse('mipscode:ideproject', kwargs={'pk': CreateProject.pk}))

class UpdateProjectView(View):
    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        conteudo = request.POST.get("content")

        project = Project.objects.get(pk=kwargs['pk'])
        
        updated_values = {}
        if title != project.title:
            updated_values['title'] = title
        if description != project.description:
            updated_values['description'] = description
        if conteudo != project.content and conteudo != None:
            updated_values['content'] = conteudo

        Project.objects.filter(pk=project.pk).update(**updated_values, edited_at=timezone.now())
        return HttpResponseRedirect(reverse('mipscode:repository'))

class DeleteProjectView(View):
    def get(self, request, *args, **kwargs):
        project = Project.objects.get(pk=kwargs['pk'])
        project.delete()
        return HttpResponseRedirect(reverse('mipscode:repository'))

class ChangeFavoriteView(View):
    def get(self, request, *args, **kwargs):
        project = Project.objects.get(pk=kwargs['pk'])
        if project.favorite == True:
            Project.objects.filter(pk=project.pk).update(favorite=False)
        else:
            Project.objects.filter(pk=project.pk).update(favorite=True)
        return HttpResponseRedirect(reverse('mipscode:repository'))

class SearchProjectView(View):
    def post(self, request, *args, **kwargs):
        profile = Profile.objects.get(user=request.user)
        name = " ".join(profile.name.split(" ")[:2])
        search = request.POST.get('search')
        filters = request.POST.get('filters')
        profile = Profile.objects.get(user=request.user)
        title = 'repositorio'
        documentation_all = Documentation.objects.all()
        
        if search:
            projects_all = Project.objects.filter(user=profile and Q(title__icontains=search))
        elif filters == None:
            projects_all = Project.objects.filter(user=profile).order_by('-edited_at')
        elif int(filters) == 1:
            projects_all = Project.objects.filter(user=profile).order_by('-edited_at')
        elif int(filters) == 2:
            projects_all = Project.objects.filter(user=profile).order_by('edited_at')
        elif int(filters) == 3:
            projects_all = Project.objects.filter(user=profile).order_by('-favorite')
        else:
            return HttpResponseRedirect(reverse('mipscode:repository'))

        context = {'projects_all': projects_all, 'search': search, 'title': title, 'profile': profile,'name':name,'documentationfirst': int(documentation_all.first().pk)}
        return render(request, "mipscode/repository.html", context)


class TutorialsView(View):
    def get(self, request, *args, **kwargs):
        title = "tutorials"
        user = request.user
        profile = Profile.objects.get(user=user)
        name = " ".join(profile.name.split(" ")[:2])
        tutorials_all = Tutorial.objects.all()
        documentation_all = Documentation.objects.all()
        context = {'name': name, 'profile': profile,'tutorials_all': tutorials_all, 'title': title,'documentationfirst': int(documentation_all.first().pk)}
        return render(request, "mipscode/tutorials.html", context)


class SearchTutorialView(View):
    def post(self, request, *args, **kwargs):
        profile = Profile.objects.get(user=request.user)
        search = request.POST.get('search')
        title = 'tutoriais'
        documentation_all = Documentation.objects.all()
        if search:
            tutorials_all = Tutorial.objects.filter(Q(title__icontains=search))
        else:
            return HttpResponseRedirect(reverse('mipscode:tutorials'))

        context = {'profile': profile, 'tutorials_all': tutorials_all,'search': search, 'title': title,'documentationfirst': int(documentation_all.first().pk)}
        return render(request, "mipscode/tutorials.html", context)

class CreateTutorialView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        name = " ".join(profile.name.split(" ")[:2])
        documentation_all = Documentation.objects.all()
        context = {'profile': profile, 'name': name,'documentationfirst': int(documentation_all.first().pk)}
        return render(request, "mipscode/createtutorial.html", context)

    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        title = request.POST.get("title")
        description = request.POST.get("description")
        content = loads(request.POST.get('content'))
        Tutorial.objects.create(user=profile, title=title,description=description, content=content)
        return HttpResponseRedirect(reverse('mipscode:tutorials'))

class ProfileView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        documentation_all = Documentation.objects.all()
        context = {'profile': profile,'name': " ".join(profile.name.split(" ")[:2]),'documentationfirst': int(documentation_all.first().pk)}
        return render(request, "mipscode/profile.html", context)

    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)

        profile_data = {'name': request.POST.get("name"),'bio': request.POST.get("bio"),'ide_theme': request.POST.get("tema"),'language': request.POST.get("idioma")}
        Profile.objects.filter(user=user).update(**profile_data)

        email = request.POST.get("email")
        senha = request.POST.get("password")
        upload = request.FILES.get('upload')

        if upload:
            profile.avatar.delete()
            if upload != "default.jpg":
                fss = FileSystemStorage(location='media/avatar/')
                file_name = str(uuid.uuid4()) + '.' + \
                    upload.name.split('.')[-1]
                file = fss.save(file_name, upload)
                print(file)
                profile.avatar = 'avatar/'+file
                profile.save()
            else:
                file = "default.jpg"

        user_data = {
            'username': email,
        }

        if senha:
            user_data['password'] = senha
            user = User.objects.get(username=user.username)
            user.set_password(senha)
            user.save()
            update_session_auth_hash(request, user)

        User.objects.filter(username=user.username).update(**user_data)
        return HttpResponseRedirect(reverse('mipscode:profile'))




class OpenTutorialView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        name = " ".join(profile.name.split(" ")[:2])
        tutorial = Tutorial.objects.get(pk=kwargs['pk'])
        tutorial_itens = tutorial.content
        documentation_all = Documentation.objects.all()
        context = {
            'tutorial_itens': tutorial_itens,
            'tutorial': tutorial,
            'profile': profile,
            'name': name,
            'documentationfirst': int(documentation_all.first().pk)
            
        }
        return render(request, "mipscode/opentutorial.html", context)


class LogoutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        return HttpResponseRedirect(reverse('mipscode:index'))
