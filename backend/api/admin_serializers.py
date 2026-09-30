from rest_framework import serializers
from django.contrib.auth.models import User
from .admin_models import (
    AdminProfile, Media, BlogCategory, Blog, Job, JobApplication,
    ApplicationNote, ApplicationStatusHistory, PageContent, FAQ,
    Testimonial, SiteSettings, SEO, ActivityLog
)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class AdminProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = AdminProfile
        fields = '__all__'

class MediaSerializer(serializers.ModelSerializer):
    uploaded_by = UserSerializer(read_only=True)
    class Meta:
        model = Media
        fields = '__all__'

class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    category_details = BlogCategorySerializer(source='category', read_only=True)
    author_details = UserSerializer(source='author', read_only=True)
    
    class Meta:
        model = Blog
        fields = '__all__'

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'

class JobApplicationSerializer(serializers.ModelSerializer):
    job_details = JobSerializer(source='job', read_only=True)
    class Meta:
        model = JobApplication
        fields = '__all__'

class ApplicationNoteSerializer(serializers.ModelSerializer):
    created_by_details = UserSerializer(source='created_by', read_only=True)
    class Meta:
        model = ApplicationNote
        fields = '__all__'

class ApplicationStatusHistorySerializer(serializers.ModelSerializer):
    changed_by_details = UserSerializer(source='changed_by', read_only=True)
    class Meta:
        model = ApplicationStatusHistory
        fields = '__all__'

class PageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageContent
        fields = '__all__'

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    photo_details = MediaSerializer(source='photo', read_only=True)
    class Meta:
        model = Testimonial
        fields = '__all__'

class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = '__all__'

class SEOSerializer(serializers.ModelSerializer):
    og_image_details = MediaSerializer(source='og_image', read_only=True)
    class Meta:
        model = SEO
        fields = '__all__'

class ActivityLogSerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    class Meta:
        model = ActivityLog
        fields = '__all__'
