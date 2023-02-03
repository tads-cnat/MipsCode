from django.urls import path

from . import views

app_name = 'mipscode'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(),name='logout'),
    path('profile/', views.ProfileView.as_view(), name='profile'),

    path('registration/', views.RegistrationView.as_view(), name='registration'),
    path('documentation/<int:pk>/', views.DocumentationView.as_view(), name='documentation'),

    path('ide/', views.IdeView.as_view(), name='ide'),
    path('repository/ide/<int:pk>', views.IdeProjectView.as_view(), name='ideproject'),

    path('repository/', views.RepositoryView.as_view(), name='repository'),
    path('repository/search', views.SearchProjectView.as_view(), name='searchproject'),
    path('repository/<int:pk>/', views.UpdateProjectView.as_view(), name='updateproject'),
    path('repository/<int:pk>/deleting', views.DeleteProjectView.as_view(), name='deleteproject'),
    path('repository/<int:pk>/changefavorite', views.ChangeFavoriteView.as_view(), name='changefavorite'),     

    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),    
    path('tutorials/', views.TutorialsView.as_view(), name='tutorials'),                                                           
    path('tutorials/search', views.SearchTutorialView.as_view(), name='searchtutorial'),
    path('tutorials/create', views.CreateTutorialView.as_view(), name='createtutorial'),
    path('tutorial/<int:pk>', views.OpenTutorialView.as_view(), name='opentutorial'),
]
