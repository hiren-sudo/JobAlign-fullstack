from django.http import JsonResponse
from .models import JobListing

def job_listings_api(request):
    listings = JobListing.objects.values('id', 'title', 'company', 'location', 'description', 'required_skills', 'source')
    return JsonResponse(list(listings), safe=False)