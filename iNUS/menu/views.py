from django.http import HttpResponse
from .models import Sem, Modules
from django.template import loader

def index1(request):
	template = loader.get_template('menu/index1.html')
	return HttpResponse(template.render(request))

def index2(request):
	template = loader.get_template('menu/index2.html')
	return HttpResponse(template.render(request))

def index3(request):
	template = loader.get_template('menu/index3.html')
	return HttpResponse(template.render(request))

def index4(request):
	template = loader.get_template('menu/index4.html')
	return HttpResponse(template.render(request))		

def index5(request):
	template = loader.get_template('menu/index5.html')
	return HttpResponse(template.render(request))

def index6(request):
	template = loader.get_template('menu/index6.html')
	return HttpResponse(template.render(request))

def module(request):
	template = loader.get_template('menu/module.html')
	return HttpResponse(template.render(request))
