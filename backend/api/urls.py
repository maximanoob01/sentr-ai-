"""
Sentr AI API — URL Routes
"""
from django.urls import path, include
from .views import DemoRequestView, ContactInquiryView, HealthCheckView, PublicBlogListView, PublicBlogDetailView

urlpatterns = [
    path('demo-request/', DemoRequestView.as_view(), name='demo-request'),
    path('contact/', ContactInquiryView.as_view(), name='contact'),
    path('health/', HealthCheckView.as_view(), name='health'),
    path('blogs/', PublicBlogListView.as_view(), name='public-blogs'),
    path('blogs/<slug:slug>/', PublicBlogDetailView.as_view(), name='public-blog-detail'),
    path('admin/', include('api.admin_urls')),
]
