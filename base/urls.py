from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
   
    
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerPage, name="register"),
    path('', views.userdashboard, name="userdashboard"),
]
