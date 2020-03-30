from django.db import models

class Project(models.Model):
    title = models.CharField(max_length = 100)
    description = models.TextField()
    title_english = models.CharField(max_length = 100)
    description_english = models.TextField()
    code = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images/projects/')

    def __str__(self):
        return self.code

class ProjectPicture(models.Model):
    image = models.ImageField(upload_to='images/projects_pictures/')
    project = models.ForeignKey(Project, on_delete=models.SET_DEFAULT, blank=True, null=True, default=1)
