from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

def loginPage(request):
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exists')
            
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('login')
        else:
            messages.error(request, 'Username OR password does not exist')   
    
    context = {}
    return render(request, 'base/login_register.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')

def userdashboard(request):
    return render(request, 'base/userdashboard.html')
# Create your views here.
