from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .admin_views import (
    MediaViewSet, BlogCategoryViewSet, BlogViewSet, JobViewSet,
    JobApplicationViewSet, PageContentViewSet, FAQViewSet, TestimonialViewSet,
    SiteSettingsViewSet, SEOViewSet, ActivityLogViewSet, AdminDashboardStatsView
)

router = DefaultRouter()
router.register(r'media', MediaViewSet)
router.register(r'blog-categories', BlogCategoryViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'jobs', JobViewSet)
router.register(r'applications', JobApplicationViewSet)
router.register(r'page-content', PageContentViewSet)
router.register(r'faqs', FAQViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'site-settings', SiteSettingsViewSet)
router.register(r'seo', SEOViewSet)
router.register(r'activity', ActivityLogViewSet)

urlpatterns = [
    path('dashboard-stats/', AdminDashboardStatsView.as_view(), name='dashboard-stats'),
    path('', include(router.urls)),
]
