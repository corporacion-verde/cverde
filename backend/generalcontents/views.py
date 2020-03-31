# views.py
from rest_framework import viewsets

from .serializers import ContentSerializer, TeamMemberSerializer
from .models import Content, TeamMember


class ContentViewSet(viewsets.ModelViewSet):
    queryset = Content.objects.all().order_by('title')
    serializer_class = ContentSerializer
    lookup_field = 'code'

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('position')
    serializer_class = TeamMemberSerializer
