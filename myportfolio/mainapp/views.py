from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .forms import ContactForm


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
    
@api_view(['POST'])
def send_contact_email(request):
    form = ContactForm(request.data)
    if form.is_valid():
        # Save the contact request in the database
        form.save()

        # Send email
        subject = 'New Contact Request from ' + form.cleaned_data['name']
        message = form.cleaned_data['message']
        from_email = form.cleaned_data['email']
        recipient_list = ['cedric.nagata@gmail.com']
        send_mail(subject, message, from_email, recipient_list)

        return Response({"message": "Email sent successfully!"}, status=status.HTTP_200_OK)
    else:
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)
