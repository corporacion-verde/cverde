from rest_framework import serializers

from .models import TeamMember

class TeamMember(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TeamMember
        fields = ('name', 'role')
