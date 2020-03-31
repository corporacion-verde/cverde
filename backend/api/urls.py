from django.contrib import admin
from django.urls import include, path
from django.conf             import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('projects/', include('projects.urls')),
    path('generalcontents/', include('generalcontents.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
