from django.shortcuts import render
from django.http import JsonResponse
import requests

def github_repos(request):
    try:
        response = requests.get('https://api.github.com/users/nagatac/repos')
        response.raise_for_status()  # Check if request was successful
        return JsonResponse(response.json(), safe=False)
    except requests.RequestException as e:
        print(e)  # Log error
        return JsonResponse({'error': 'Failed to fetch data'}, status=500)


def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    return render(request, 'projects.html')

def resume(request):
    return render(request, 'resume.html')

def contact(request):
    return render(request, 'contact.html')
