from django.urls import path
from . import views

urlpatterns = [
   
    path('', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('userdashboard/', views.userdashboard, name="userdashboard"),
]
