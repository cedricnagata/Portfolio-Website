from django.urls import path
from . import views

urlpatterns = [
    path('api/github-repos/', views.get_github_repos, name='github-repos'),
]
