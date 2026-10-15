from django.shortcuts import render, redirect
from django.contrib import messages
from .models import ContactMessage


def home(request):
    return render(request, 'main/index.html')


def contact(request):
    if request.method == "POST":

        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        subject = request.POST.get("subject", "").strip()
        message = request.POST.get("message", "").strip()

        # Check all fields
        if not all([name, email, subject, message]):
            messages.error(
                request,
                "Please fill in all the fields."
            )
            return redirect("home")

        # Save contact message
        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        messages.success(
            request,
            "Your message has been received successfully!"
        )

        return redirect("home")

    return redirect("home")