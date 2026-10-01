from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import User
from .admin_models import (
    AdminProfile, Media, BlogCategory, Blog, Job, JobApplication,
    ApplicationNote, ApplicationStatusHistory, PageContent, FAQ,
    Testimonial, SiteSettings, SEO, ActivityLog
)
from .admin_serializers import (
    AdminProfileSerializer, MediaSerializer, BlogCategorySerializer,
    BlogSerializer, JobSerializer, JobApplicationSerializer,
    ApplicationNoteSerializer, ApplicationStatusHistorySerializer,
    PageContentSerializer, FAQSerializer, TestimonialSerializer,
    SiteSettingsSerializer, SEOSerializer, ActivityLogSerializer,
    UserSerializer
)
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser

# Simplified custom permission for demonstration. 
# A real implementation might check request.user.admin_profile.role
class IsAdminUser(permissions.IsAuthenticated):
    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.is_staff)

class MediaViewSet(viewsets.ModelViewSet):
    queryset = Media.objects.all().order_by('-uploaded_at')
    serializer_class = MediaSerializer
    permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def perform_create(self, serializer):
        serializer.save(uploaded_by=self.request.user)

class BlogCategoryViewSet(viewsets.ModelViewSet):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    # permission_classes = [IsAdminUser]

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    # permission_classes = [IsAdminUser]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    @action(detail=True, methods=['post'])
    def publish(self, request, pk=None):
        blog = self.get_object()
        blog.status = 'PUBLISHED'
        blog.save()
        return Response({'status': 'published'})
        
    @action(detail=True, methods=['post'])
    def unpublish(self, request, pk=None):
        blog = self.get_object()
        blog.status = 'DRAFT'
        blog.save()
        return Response({'status': 'unpublished'})

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobSerializer
    # permission_classes = [IsAdminUser]

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all().order_by('-applied_at')
    serializer_class = JobApplicationSerializer
    # permission_classes = [IsAdminUser]

    @action(detail=True, methods=['patch'])
    def change_status(self, request, pk=None):
        app = self.get_object()
        new_status = request.data.get('status')
        if new_status:
            ApplicationStatusHistory.objects.create(
                application=app,
                previous_status=app.status,
                new_status=new_status,
                changed_by=request.user
            )
            app.status = new_status
            app.save()
            return Response({'status': 'updated'})
        return Response({'error': 'Status required'}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def add_note(self, request, pk=None):
        app = self.get_object()
        note = request.data.get('note')
        if note:
            ApplicationNote.objects.create(
                application=app,
                note=note,
                created_by=request.user
            )
            return Response({'status': 'note added'})
        return Response({'error': 'Note required'}, status=status.HTTP_400_BAD_REQUEST)

class PageContentViewSet(viewsets.ModelViewSet):
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'page_identifier'

class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all().order_by('display_order')
    serializer_class = FAQSerializer
    permission_classes = [IsAdminUser]

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by('display_order')
    serializer_class = TestimonialSerializer
    permission_classes = [IsAdminUser]

class SiteSettingsViewSet(viewsets.ModelViewSet):
    queryset = SiteSettings.objects.all()
    serializer_class = SiteSettingsSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'key'

class SEOViewSet(viewsets.ModelViewSet):
    queryset = SEO.objects.all()
    serializer_class = SEOSerializer
    permission_classes = [IsAdminUser]

class ActivityLogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ActivityLog.objects.all().order_by('-created_at')
    serializer_class = ActivityLogSerializer
    permission_classes = [IsAdminUser]

from rest_framework.views import APIView

class AdminDashboardStatsView(APIView):
    # permission_classes = [IsAdminUser] # Temporarily disabled
    def get(self, request):
        total_blogs = Blog.objects.count()
        published_blogs = Blog.objects.filter(status='PUBLISHED').count()
        open_positions = Job.objects.filter(status='PUBLISHED').count()
        new_applications = JobApplication.objects.filter(status='NEW').count()

        recent_applications = JobApplicationSerializer(
            JobApplication.objects.order_by('-applied_at')[:5], many=True
        ).data

        recent_blogs = BlogSerializer(
            Blog.objects.order_by('-created_at')[:5], many=True
        ).data

        recent_activity = ActivityLogSerializer(
            ActivityLog.objects.order_by('-created_at')[:5], many=True
        ).data

        return Response({
            'total_blogs': total_blogs,
            'published_blogs': published_blogs,
            'open_positions': open_positions,
            'new_applications': new_applications,
            'recent_applications': recent_applications,
            'recent_blogs': recent_blogs,
            'recent_activity': recent_activity
        })

