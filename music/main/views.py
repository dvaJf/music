from django.shortcuts import render
from django.http import HttpResponse
from .models import song
def index(request):
    a=song.objects.all()
    return render(request,"main/index.html",{"a":a})
def setting(request):
    return render(request,"main/setting.html")