from rest_framework import serializers

from .models import TeamMember

class TeamMemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TeamMember
        fields = ('name', 'role')
