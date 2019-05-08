from django.urls import path
from api import views

urlpatterns = [
    path('login/', views.login),
    path('logout/', views.logout),
    path('users/', views.UserList.as_view()),
    path('gym_lists/', views.gym_list),
    path('gym_lists/<int:pk>/', views.get_gym_detail),
    path('gym_lists/<int:pk>/client_list/', views.ClientList.as_view()),
    path('gym_lists/<int:pk>/client_list/<int:pk2>/', views.ClientDetail.as_view()),

]
