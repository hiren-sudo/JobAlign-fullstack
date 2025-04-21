from django.db import models

class JobListing(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    description = models.TextField()
    required_skills = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    source = models.CharField(max_length=200, blank=True)
    apply_link = models.URLField(max_length=200, blank=True, null=True)  # New field for apply link

    def __str__(self):
        return f"{self.title} at {self.company}"

    class Meta:
        unique_together = ('title', 'company', 'location')