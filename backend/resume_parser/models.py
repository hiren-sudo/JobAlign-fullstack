# from django.db import models

# class Resume(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     phone = models.CharField(max_length=20)
#     education = models.TextField()
#     skills = models.TextField()
#     experience = models.TextField()
#     parsed_text = models.TextField()

# jobalign/resume_parser/models.py
from django.db import models

class Resume(models.Model):
    name = models.CharField(max_length=100, default="N/A")
    email = models.CharField(max_length=100, default="N/A")
    phone = models.CharField(max_length=20, default="N/A")
    skills = models.TextField(default="N/A")
    education = models.TextField(default="N/A")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Resume (created at {self.created_at})"