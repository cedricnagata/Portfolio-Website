from django.urls import path
from . import views

urlpatterns = [
    path('api/github-repos/', views.get_github_repos, name='github-repos'),
    path('api/send-email/', views.send_contact_email, name='send-email'),
]
