from django.contrib import admin

from .models import Content, TeamMember, NewsletterUser

admin.site.register(Content)
admin.site.register(TeamMember)

class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('email', 'date_added',)

admin.site.register(NewsletterUser, NewsletterAdmin)
