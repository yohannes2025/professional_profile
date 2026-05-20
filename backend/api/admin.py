from django.contrib import admin
from .models import ContactMessage, Service, PortfolioItem


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'message']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']
    list_editable = ['order']


@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']
    search_fields = ['title', 'description']
