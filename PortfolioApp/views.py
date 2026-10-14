from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib import messages


def home(request):
    return render(request, 'main/index.html')


def contact(request):
    if request.method == 'POST':

        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        print("Name:", name)
        print("Email:", email)
        print("Subject:", subject)
        print("Message:", message)

        messages.success(
            request,
            "Thank you! Your message has been received."
        )

        return redirect('home')

    return redirect('home')