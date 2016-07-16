from django.http import HttpResponse
from .models import Sem, Modules
from django.template import loader

def index(request):
	template = loader.get_template('menu/index.html')
	return HttpResponse(template.render(request))

def module(request):
	template = loader.get_template('menu/module.html')
	return HttpResponse(template.render(request))
