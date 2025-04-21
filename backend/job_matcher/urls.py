from django.urls import path
from . import views

urlpatterns = [
    path('api/listings/', views.job_listings_api, name='job_listings_api'),
]