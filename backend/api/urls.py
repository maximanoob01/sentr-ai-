"""
Sentr AI API — URL Routes
"""
from django.urls import path
from .views import DemoRequestView, ContactInquiryView, HealthCheckView

urlpatterns = [
    path('demo-request/', DemoRequestView.as_view(), name='demo-request'),
    path('contact/', ContactInquiryView.as_view(), name='contact'),
    path('health/', HealthCheckView.as_view(), name='health'),
]
