# views.py
from rest_framework import viewsets

from .serializers import ProjectSerializer
from .models import Project


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('title')
    serializer_class = ProjectSerializer
