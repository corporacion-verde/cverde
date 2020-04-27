# serializers.py
from rest_framework import serializers

from .models import Content, TeamMember

class ContentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Content
        fields = ('title', 'content', 'title_english', 'content_english', 'code', 'image')

class TeamMemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TeamMember
        fields = ('id', 'name', 'lastname', 'email', 'role', 'role_english', 'avatar', 'position')
