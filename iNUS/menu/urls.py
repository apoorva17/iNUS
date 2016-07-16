from django.conf.urls import url

from . import views

app_name = 'menu'
urlpatterns = [
 	 url(r'^year1/$', views.index, name='year1'),
 	 url(r'^year2/$', views.index, name='year2'),
 	  url(r'^year3/$', views.index, name='year3'),
 	 url(r'^year4/$', views.index, name='year4'),
 	  url(r'^year5/$', views.index, name='year5'),
 	 url(r'^year6/$', views.index, name='year6'),
 	 url(r'^module/$', views.module, name='module'),
]
