from rest_framework import serializers
from .models import ContactMessage, Service, PortfolioItem


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'icon', 'order']


class PortfolioItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioItem
        fields = ['id', 'title', 'description', 'image_url',
                  'tech_stack', 'project_url', 'github_url']
