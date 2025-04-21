# from django.contrib import admin
# from django.urls import include, path
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('resume_parser/', include('resume_parser.urls')),
# ]
from django.contrib import admin
from django.urls import path, include
from .views import home  # Import the new view

urlpatterns = [
    path('', home, name='home'),  # Add root URL
    path('admin/', admin.site.urls),
    path('resume_parser/', include('resume_parser.urls')),
    path('jobs/', include('job_matcher.urls')),
    path('api/auth/', include('authentication.urls')),
]