from django.conf.urls import url
from django.shortcuts import redirect, render

from . import views

urlpatterns = [
    url(r'^$', views.index),

    url(r'^posts/$', views.posts),
    url(r'^post/(?P<post_id>-*[0-9]+)/$', views.post),

    url(r'^post/$', lambda req: redirect('/posts/')), # redirect /post/ to /posts/
    url(r'^posts/(-*[0-9]+)/$', lambda req, p_id: redirect('/post/%s/' % p_id)), #redirect /posts/123 to /post/123/


    url(r'^gallery/$', views.gallery),
    url(r'^about/$', lambda req: views.post(req, -1)),

    url(r'^test/$', views.test),
]
