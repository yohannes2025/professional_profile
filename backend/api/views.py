from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage, Service, PortfolioItem
from .serializers import ContactMessageSerializer, ServiceSerializer, PortfolioItemSerializer


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Send email notification (optional)
        try:
            send_mail(
                f'New Contact Message from {serializer.data["name"]}',
                f"Message: {serializer.data['message']}\n\nFrom: {serializer.data['email']}",
                settings.DEFAULT_FROM_EMAIL,
                [settings.ADMIN_EMAIL],
                fail_silently=True,
            )
        except:
            pass

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class PortfolioItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer
