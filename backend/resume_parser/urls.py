# from django.urls import path
# from . import views

# urlpatterns = [
#     path('upload/', views.upload_resume, name='upload_resume'),
# ]

# jobalign/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('resume_parser.urls')),
]

# jobalign/resume_parser/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_resume, name='upload_resume'),
    path('api/upload-resume/', views.api_upload_resume, name='api_upload_resume'),
]