from django.contrib import admin

from .models import Content
from .models import TeamMember

admin.site.register(Content)
admin.site.register(TeamMember)
