"""
Sentr AI API — Serializers
"""
from rest_framework import serializers
from .models import DemoRequest, ContactInquiry


class DemoRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = DemoRequest
        fields = ['full_name', 'company', 'email', 'phone', 'industry', 'requirement']
        extra_kwargs = {
            'full_name': {'required': True},
            'company': {'required': True},
            'email': {'required': True},
            'phone': {'required': True},
            'industry': {'required': True},
            'requirement': {'required': False},
        }

    def validate_email(self, value):
        """Basic email validation."""
        if not value or '@' not in value:
            raise serializers.ValidationError('Please provide a valid email address.')
        return value.lower().strip()

    def validate_full_name(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError('Please provide your full name.')
        return value.strip()

    def validate_company(self, value):
        if len(value.strip()) < 2:
            raise serializers.ValidationError('Please provide your company name.')
        return value.strip()


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['full_name', 'email', 'phone', 'company', 'inquiry_type', 'message']
        extra_kwargs = {
            'full_name': {'required': True},
            'email': {'required': True},
            'message': {'required': True},
        }

    def validate_email(self, value):
        if not value or '@' not in value:
            raise serializers.ValidationError('Please provide a valid email address.')
        return value.lower().strip()
