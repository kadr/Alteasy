from django.contrib import admin
from django.template.defaulttags import url
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('book.urls')),
    path('', include('view_profile.urls')),
]
