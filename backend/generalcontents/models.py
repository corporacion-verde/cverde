from django.db import models

class Content(models.Model):
    title = models.CharField(max_length = 100)
    content = models.TextField()
    title_english = models.CharField(max_length = 100)
    content_english = models.TextField()
    code = models.CharField(max_length=20)
    image = models.ImageField(upload_to='images/contents/')

    def __str__(self):
        return self.code

class TeamMember(models.Model):
    name = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    email = models.EmailField()
    role = models.CharField(max_length = 100, default="Cverdiane")
    role_english = models.CharField(max_length = 100, default="Cverdian")
    avatar = models.ImageField(upload_to='images/team_members/')
    position = models.IntegerField(default=100)

    class Meta:
        ordering = ['position']

    def __str__(self):
        return str(self.position) + " - " + self.role + " - " + self.name + " " + self.lastname
