from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def get_github_repos(request):
    github_username = 'cedricnagata'  # Replace with your GitHub username
    github_url = f'https://api.github.com/users/{github_username}/repos'
    
    try:
        response = requests.get(github_url)
        response.raise_for_status()  # Check if request was successful
        return Response(response.json(), status=status.HTTP_200_OK)
    except requests.RequestException as e:
        return Response({"error": "Failed to fetch data from GitHub"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
