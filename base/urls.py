from django.urls import path
from . import views
from django.contrib import admin
from base import views
from base.views import *

urlpatterns = [
   
    
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerPage, name="register"),
    path('', views.userdashboard, name="userdashboard"),
    #path('admin/', admin.site.urls),
    path('get_chain', views.get_chain, name="get_chain"),
    path('mine_block', views.mine_block, name="mine_block"),
    path('is_valid', views.is_valid, name="is_valid"),
]
