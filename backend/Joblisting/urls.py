from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def klm(request):
    return JsonResponse({"status": "Alive", "message": "Welcome to Job Listing API"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('jobs.urls')),
    path('health/', klm),
]