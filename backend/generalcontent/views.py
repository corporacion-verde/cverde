from rest_framework import viewsets

from django.utils.translation import gettext as _
from .models import Content, TeamMember
from .serializers import TeamMemberSerializer

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('name')
    serializer_class = TeamMemberSerializer

# def about(request):
#     about_us = Content.objects.get(code='about_us')
#     mission = Content.objects.get(code='mission')
#     vision= Content.objects.get(code='vision')
#     history = Content.objects.get(code='history')
#     team_members = TeamMember.objects
#
#     # Translation Example
#     title = _("About us")
# 
#
#     return render(request, 'generalcontent/about.html', {'about_us': about_us,
#                                                          'mission': mission,
#                                                          'vision': vision,
#                                                          'history': history,
#                                                          'team_members': team_members,
#                                                          'title': title,
#                                                          })
