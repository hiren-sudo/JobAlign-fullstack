from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to JobAlign! Go to /resume_parser/upload/ to upload a resume or /jobs/api/listings/ to view job listings.")