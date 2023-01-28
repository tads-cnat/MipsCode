#Importações de autenticação e login
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.models import User

#Importações de gerenciamento de arquivos e imagens
from PIL import Image
from django.core.files.storage import FileSystemStorage

#Importações de views e shortcuts
from django.http import HttpResponseRedirect
from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.utils import timezone
from django.views import View
from django.views.generic import TemplateView

#Importações de modelos
from .models import Documentation, Profile, Repositorio, Tutorial

#Outras importações
from json import loads
import uuid

#Importações de gerenciamento de querys
from django.db.models import Q



class IndexView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse('mipscode:dashboard'))
        return render(request, "mipscode/index.html", {"title": "inicio"})


class LoginView(TemplateView):
    template_name = 'mipscode/login.html'

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            logout(request)
            context = {'error_message': 'Usuário já está autenticado'}
            return render(request, self.template_name, context)
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = self._authenticate_user(request, username, password)
        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('mipscode:index'))
        else:
            context = {'error_message': 'Usuário ou senha incorretos!'}
            return render(request, self.template_name, context)

    def _authenticate_user(self, request, username, password):
        return authenticate(request, username=username, password=password)


class CadastroView(TemplateView):
    template_name = 'mipscode/cadastro.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

    def post(self, request, *args, **kwargs):
        username = request.POST.get('user')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if self._user_exists(email):
            return HttpResponse('Já existe com esse email.')
        user = self._create_user(username, email, password)
        if user:
            profile = Profile.objects.create(user=user, name=username)
            profile.save()
            return HttpResponseRedirect(reverse('mipscode:login'))
        else:
            return HttpResponse('Erro ao criar usuário.')

    def _user_exists(self, email):
        return User.objects.filter(email=email).exists()

    def _create_user(self, username, email, password):
        try:
            user = User.objects.create_user(username=email, password=password, email=email)
            user.save()
            return user
        except:
            return None


class DocumentacaoView(View):
    def get(self, request, *args, **kwargs):
        profile = ""
        name = ""
        if request.user.is_authenticated:
            profile = Profile.objects.get(user=request.user)
            name = " ".join(profile.name.split(" ")[:2])
        documentacao = get_object_or_404(Documentation, pk=kwargs['pk'])
        documentacao_itens = documentacao.content
        links_documentacao = Documentation.objects.all()
        
        title_page = "documentacao"
        
        context = {
            "name": name,
            "documentacao": documentacao,
            "documentacao_itens": documentacao_itens,
            "links_documentacao": links_documentacao, 
            "title": title_page,
            "profile": profile
        }
        return render(request, "mipscode/documentacao.html", context)


class IdeView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='application/javascript')
        title_page = "ide"
        context = {"title": title_page}
        render(request, "mipscode/ide.html", context)
        return response

class IdeProjetoView(View):
    def get(self, request, *args, **kwargs):
        response = HttpResponse(content_type='application/javascript')
        projeto = get_object_or_404(Repositorio, pk=kwargs['pk'])
        title_page = "ide"
        profile = Profile.objects.get(user=request.user)
        name = " ".join(profile.name.split(" ")[:2])
        context = {"profile":profile,"title": title_page, "projeto": projeto,'name':name}
        render(request, "mipscode/ide.html", context)
        return response

    def post(self, request, *args, **kwargs):
        textarea = request.POST.get('content')
        title = request.POST.get('title')
        description = request.POST.get('description')

        Repositorio.objects.filter(pk=kwargs['pk']).update(content=textarea, title=title, description=description, edited_at=timezone.now())
        projeto = Repositorio.objects.get(pk=kwargs['pk'])
        return HttpResponseRedirect(reverse('mipscode:ide_projeto', kwargs={'pk':projeto.pk}))

class RepositorioView(View):
    def get(self, request, *args, **kwargs):
        title_page = "repositorio"
        profile = Profile.objects.get(user=request.user)
        name = " ".join(profile.name.split(" ")[:2])
        projetos = Repositorio.objects.filter(user=profile).order_by('-edited_at')
        return render(request, "mipscode/repositorio.html", {'name':name,'profile': profile, 'projetos': projetos, 'title': title_page})

    
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
        
        CreateProject = Repositorio.objects.create(user=profile, title=title, description=description, content=content, created_at=timezone.now(), edited_at=timezone.now())
        return HttpResponseRedirect(reverse('mipscode:ide_projeto', kwargs={'pk':CreateProject.pk}))     

    


class BuscarRepositorio(View):
    def post(self, request, *args, **kwargs):
        busca = request.POST.get('search')
        filters = request.POST.get('filters')
        profile = Profile.objects.get(user=request.user)
        title = 'repositorio'
        if busca:
            lista = Repositorio.objects.filter(
                user=profile and Q(title__icontains=busca))
        elif filters == None:
            lista = Repositorio.objects.filter(
                user=profile).order_by('-edited_at')
        elif int(filters) == 1:
            lista = Repositorio.objects.filter(
                user=profile).order_by('-edited_at')
        elif int(filters) == 2:
            lista = Repositorio.objects.filter(
                user=profile).order_by('edited_at')
        elif int(filters) == 3:
            lista = Repositorio.objects.filter(
                user=profile).order_by('-favorite')
        else:
            return HttpResponseRedirect(reverse('mipscode:repositorio'))
        
        context = {'projetos': lista, 'busca': busca, 'title': title, 'profile': profile}
        return render(request, "mipscode/repositorio.html", context)


class BuscarTutorial(View):
    def post(self, request, *args, **kwargs):
        profile = Profile.objects.get(user=request.user)
        busca = request.POST.get('search')
        filters = request.POST.get('filters')
        title = 'tutoriais'
        if busca:
            lista = Tutorial.objects.filter(Q(title__icontains=busca))
        elif int(filters) > 0:
            lista = Tutorial.objects.filter(level=filters)
        else:
            return HttpResponseRedirect(reverse('mipscode:tutoriais'))
        
        context = {'profile': profile, 'tutoriais': lista, 'busca': busca, 'title': title}
        return render(request, "mipscode/tutoriais.html", context)


class DashboardView(View):
    def get(self, request, *args, **kwargs):
        title = "dashboard"
        user = request.user
        profile = Profile.objects.get(user=user)
        projetos = Repositorio.objects.filter(
            user=profile).order_by('-edited_at')[:4]
        tutoriais = Tutorial.objects.all()[:8]
        name = " ".join(profile.name.split(" ")[:2])

        return render(request, "mipscode/dashboard.html", {'name':name,'profile': profile, 'projetos': projetos, 'tutoriais': tutoriais, 'title': title, 'now': timezone.now()})

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

        Repositorio.objects.create(user=profile, title=title, description=description, content=content, created_at=timezone.now())

        return HttpResponseRedirect(reverse('mipscode:dashboard'))

class TutoriaisView(View):
    def get(self, request, *args, **kwargs):
        title = "tutoriais"
        user = request.user
        profile = Profile.objects.get(user=user)
        name = " ".join(profile.name.split(" ")[:2])
        tutoriais = Tutorial.objects.all()
        context = {'name':name,'profile': profile, 'tutoriais': tutoriais, 'title': title}
        return render(request, "mipscode/tutoriais.html", context)
    
    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        profile = Profile.objects.filter(email='teste@gmail.com').first()

        Repositorio.objects.create(
            profile=profile, title=title, description=description, content="null")

        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class AtualizarProjeto(View):
    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        projeto = get_object_or_404(Repositorio, pk=kwargs['pk'])
        conteudo = request.POST.get("content")
        Repositorio.objects.filter(pk=projeto.pk).update(title=title,description=description,edited_at=timezone.now(),content=conteudo)
        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class RemoverProjeto(View):
    def get(self, request, *args, **kwargs):
        projeto = Repositorio.objects.get(pk=kwargs['pk'])
        projeto.delete()
        return HttpResponseRedirect(reverse('mipscode:repositorio'))


class FavoritarProjeto(View):
    def get(self, request, *args, **kwargs):
        projeto = Repositorio.objects.get(pk=kwargs['pk'])
        projeto.favorite = True
        projeto.save()
        return HttpResponseRedirect(reverse('mipscode:repositorio'))


class DesfavoritarProjeto(View):
    def get(self, request, *args, **kwargs):
        projeto = Repositorio.objects.get(pk=kwargs['pk'])
        projeto.favorite = False
        projeto.save()
        return HttpResponseRedirect(reverse('mipscode:repositorio'))
class PerfilView(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        context = {
        'profile': profile,
        'name': " ".join(profile.name.split(" ")[:2]),
        }
        return render(request, "mipscode/perfil.html", context)

    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)

        profile_data = {
            'name': request.POST.get("name"),
            'bio': request.POST.get("bio"),
            'ide_theme': request.POST.get("tema"),
            'language': request.POST.get("idioma"),
        }
        Profile.objects.filter(user=user).update(**profile_data)
        
        email = request.POST.get("email")
        senha = request.POST.get("password")
        upload = request.FILES.get('upload')
        if upload:
            if upload != "default.jpg":
                fss = FileSystemStorage(location='media/avatar/')
                file_name = str(uuid.uuid4()) + '.' + upload.name.split('.')[-1]
                file = fss.save(file_name, upload)
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
        return HttpResponseRedirect(reverse('mipscode:perfil'))

class CriarTutorial(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        name = " ".join(profile.name.split(" ")[:2])
        context = {'profile': profile,'name':name}
        return render(request, "mipscode/criartutorial.html", context)
    def post(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        title = request.POST.get("title")
        description = request.POST.get("description")
        content =loads(request.POST.get('content'))
        Tutorial.objects.create(user= profile, title=title, description = description, content = content)
        return HttpResponseRedirect(reverse('mipscode:tutoriais'))

class VisualizarTutorial(View):
    def get(self, request, *args, **kwargs):
        user = request.user
        profile = Profile.objects.get(user=user)
        name = " ".join(profile.name.split(" ")[:2])
        tutorial = Tutorial.objects.get(pk=kwargs['pk'])
        tutorial_itens = tutorial.content
        context = {
                'tutorial_itens': tutorial_itens,
                'tutorial': tutorial,
                'profile': profile,
                'name': name
        }
        return render(request, "mipscode/visualizarTutorial.html", context)
    
class LogoutView(View):
    def get(self, request, *args, **kwargs):
        logout(request)
        return HttpResponseRedirect(reverse('mipscode:index'))
