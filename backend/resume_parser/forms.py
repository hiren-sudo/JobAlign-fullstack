from django import forms
from .models import Resume

class ResumeUploadForm(forms.ModelForm):
    resume_file = forms.FileField()

    class Meta:
        model = Resume
        fields = ['resume_file']
