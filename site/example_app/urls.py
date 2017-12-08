from django.conf.urls import include, url
from django.contrib import admin
from chatterbot.ext.django_chatterbot import urls as chatterbot_urls
from example_app.views import ChatterBotAppView
from example_app.views import ee_1_2
from example_app.views import ee_3
from example_app.views import ee_4
from example_app.views import ee_5
from example_app.views import ee_6
from example_app.views import ee_7

urlpatterns = [
    url(r'^$', ChatterBotAppView.as_view(), name='main'),
    url(r'^admin/', include(admin.site.urls), name='admin'),
    url(r'^api/chatterbot/', include(chatterbot_urls, namespace='chatterbot')),
    url(r'^404over/', ee_1_2.as_view(), name='main2'),
    url(r'^qshzljhqfu/', ee_3.as_view(), name='main3'),
    url(r'^DRA7W/', ee_4.as_view(), name='main4'),
    url(r'^ncziy/', ee_5.as_view(), name='main5'),
    url(r'^8bajf/', ee_6.as_view(), name='main6'),
    url(r'^1snpa/', ee_7.as_view(), name='main7'),

]
