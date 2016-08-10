from django.conf.urls import url

from . import views

app_name = 'menu'
urlpatterns = [
 	 url(r'^year1/$', views.index1, name='year1'),
 	 url(r'^year2/$', views.index2, name='year2'),
 	  url(r'^year3/$', views.index3, name='year3'),
 	 url(r'^year4/$', views.index4, name='year4'),
 	  url(r'^year5/$', views.index5, name='year5'),
 	 url(r'^year6/$', views.index6, name='year6'),
 	 url(r'^module/$', views.module, name='module'),
]
