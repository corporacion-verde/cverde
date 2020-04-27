# serializers.py
from rest_framework import serializers

from .models import Project

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'title_english', 'description_english', 'code', 'image')
