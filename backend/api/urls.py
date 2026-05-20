from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactMessageViewSet, ServiceViewSet, PortfolioItemViewSet

router = DefaultRouter()
router.register(r'messages', ContactMessageViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'portfolio', PortfolioItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
