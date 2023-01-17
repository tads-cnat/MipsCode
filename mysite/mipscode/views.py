from django.http import HttpResponseRedirect
from django.http.response import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.views import View
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login, logout
from .models import Profile, ProfileSettings, Documentation, Repositorio, Tutorial
from django.contrib.auth.models import User


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "mipscode/index.html")

class LoginView(TemplateView):
    def post(self, request, *args, **kwargs):
        username = request.POST['username']
        password = request.POST['password']
        print(username)
        print(password)
        print(request.POST)
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            print(user)
            return HttpResponseRedirect(reverse('mipscode:index'))
        else:
            context = { 'msg': 'Usuário ou senha incorretos!'}
            print('deu erro')
            return render(request, "mipscode/login.html", context)

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            context = { 'msg': 'Usuário já está autenticado' }
            print('usuário já está autenticado')
            logout(request)
            return render(request, 'mipscode/login.html', context)

        mensagem = ""
        return render(request, "mipscode/login.html", {'mensagem': mensagem })


class CadastroView(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, "mipscode/cadastro.html")

    def post(self, request, *args, **kwargs):
        username = request.POST['user']
        email = request.POST['email']
        password = request.POST['password']

        userExists = User.objects.filter(email=email).first()
        
        if userExists:
            return HttpResponse('Já existe com esse email.')

        user = User.objects.create_user(username=username, email=email, password=password)
        profile = Profile.objects.create(user=user)
        user.save()
        profile.save()
        
        return HttpResponseRedirect(reverse('mipscode:login'))


class DocumentacaoView(View):
    def get(self, request, *args, **kwargs):
        documentacao = get_object_or_404(Documentation, pk=kwargs['pk'])
        pk = kwargs['pk']
        documentacao_itens = documentacao.content["content"]
        links_documentacao = Documentation.objects.all()
        return render(request, "mipscode/documentacao.html",{"documentacao":documentacao,"documentacao_itens":documentacao_itens,"links_documentacao":links_documentacao})

# {"content": [{"h1": "Tstes de titulo", "p": "A Suprema Corte dos Estados Unidos permitiu nesta segunda-feira que o WhatsApp, da Meta Platforms, abra processo contra a companhia israelense NSO Group por explorar um bug no aplicativo de mensagens para instalar um software de espionagem que permitiu o monitoramento de 1.400 pessoas, incluindo jornalistas, ativistas de direitos humanos e dissidentes."}, {"h1": "Titulo2", "p": "Os juízes rejeitaram recurso da NSO contra decisão de um tribunal inferior que permitiu o andamento do processo. A NSO argumentou que é imune a processos porque agiu como agente de governos estrangeiros não identificados quando instalou o spyware 'Pegasus'."}, {"p": "Em 2019, o WhatsApp processou a NSO buscando uma liminar e indenização, acusando a empresa israelense de acessar os servidores do aplicativo sem permissão para instalar o software Pegasus nos dispositivos móveis das vítimas."}]}



class IdeView(View):
    def get(self, request, *args, **kwargs):
        title_page = "ide"
        return render(request, "mipscode/ide.html",{"title":title_page})
        
class RepositorioView(View):
    def get(self, request, *args, **kwargs):
        profile = Profile.objects.filter(email='teste@gmail.com').first()
        projetos = Repositorio.objects.filter(profile=profile).order_by('-created_at')
        return render(request, "mipscode/repositorio.html",{'profile': profile, 'projetos': projetos})

    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        profile = Profile.objects.filter(email='teste@gmail.com').first()

        CreateProject = Repositorio.objects.create(profile= profile,title=title, description=description,content= "null")

        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class DashboardView(View):
    def get(self, request, *args, **kwargs):
        profile = Profile.objects.filter(email='teste@gmail.com').first()
        projetos = Repositorio.objects.filter(profile=profile).order_by('-created_at')[:4]
        tutoriais = Tutorial.objects.all()
        return render(request, "mipscode/dashboard.html",{'profile': profile, 'projetos': projetos})

    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        profile = Profile.objects.filter(email='teste@gmail.com').first()

        CreateProject = Repositorio.objects.create(profile= profile,title=title, description=description,content= "null")

        return HttpResponseRedirect(reverse('mipscode:dashboard'))


class TutoriaisView(View):
    def get(self, request, *args, **kwargs):
        profile = Profile.objects.filter(email='teste@gmail.com').first()
        projetos = Repositorio.objects.filter(profile=profile)
        tutoriais = Tutorial.objects.all()
        return render(request, "mipscode/dashboard.html",{'profile': profile, 'projetos': projetos})

    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        profile = Profile.objects.filter(email='teste@gmail.com').first()

        CreateProject = Repositorio.objects.create(profile= profile,title=title, description=description,content= "null")

        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class AtualizarProjeto(View):
    def post(self, request, *args, **kwargs):
        title = request.POST.get('title')
        description = request.POST.get('description')
        projeto = get_object_or_404(Repositorio, pk = kwargs['pk'])

        projeto.title = title
        projeto.description = description
        projeto.save()
        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class RemoverProjeto(View):
    def get(self, request, *args, **kwargs):
        projeto = Repositorio.objects.get(pk = kwargs['pk'])
        projeto.delete()
        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class FavoritarProjeto(View):
    def get(self, request, *args, **kwargs):
        projeto = Repositorio.objects.get(pk = kwargs['pk'])
        projeto.favorite = True
        projeto.save()
        return HttpResponseRedirect(reverse('mipscode:repositorio'))

class DesfavoritarProjeto(View):
    def get(self, request, *args, **kwargs):
        projeto = Repositorio.objects.get(pk = kwargs['pk'])
        projeto.favorite = False
        projeto.save()
        
        return HttpResponseRedirect(reverse('mipscode:repositorio'))



        