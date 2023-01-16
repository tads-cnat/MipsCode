from django.urls import path

from . import views

app_name = 'mipscode'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('cadastro/', views.CadastroView.as_view(), name='cadastro'),
    # path('documentacao/', views.DocumentacaoView.as_view(), name='documentacao'),
    path('documentacao/<int:pk>/', views.DocumentacaoView.as_view(), name='documentacao'),
    path('ide/', views.IdeView.as_view(), name='ide'),
    path('repositorio/', views.RepositorioView.as_view(), name='repositorio'),
    path('repositorio/<int:pk>/atualizar', views.AtualizarProjeto.as_view(), name='atualizarprojeto'),
    path('repositorio/<int:pk>/remover', views.RemoverProjeto.as_view(), name='removerprojeto'),
    path('repositorio/<int:pk>/favoritar', views.FavoritarProjeto.as_view(), name='favoritarprojeto'),
    path('repositorio/<int:pk>/desfavoritar', views.DesfavoritarProjeto.as_view(), name='desfavoritarprojeto'),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('tutoriais/', views.TutoriaisView.as_view(), name='tutoriais'),
]