"""
Sentr AI API — Views
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import logging

from .models import DemoRequest, ContactInquiry, CloudEnquiry
from .serializers import DemoRequestSerializer, ContactInquirySerializer, CloudEnquirySerializer

logger = logging.getLogger(__name__)


class DemoRequestView(APIView):
    """
    POST /api/demo-request/
    Accept demo request form submissions from the Indri product page.
    """

    def post(self, request):
        serializer = DemoRequestSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {'error': 'Invalid form data', 'details': serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Save to database
        demo_request = serializer.save()
        logger.info(f"New demo request from {demo_request.full_name} at {demo_request.company}")

        # Send notification email (console in dev, SMTP in production)
        try:
            send_mail(
                subject=f"[Sentr AI] New Indri Demo Request — {demo_request.company}",
                message=(
                    f"New Indri demo request received:\n\n"
                    f"Name: {demo_request.full_name}\n"
                    f"Company: {demo_request.company}\n"
                    f"Email: {demo_request.email}\n"
                    f"Phone: {demo_request.phone}\n"
                    f"Industry: {demo_request.get_industry_display()}\n\n"
                    f"Requirement:\n{demo_request.requirement or 'Not provided'}\n\n"
                    f"Submitted: {demo_request.created_at.strftime('%d %b %Y, %H:%M IST')}\n"
                    f"Admin: http://localhost:8000/admin/api/demorequest/{demo_request.id}/change/"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.NOTIFICATION_EMAIL],
                fail_silently=True,
            )
        except Exception as e:
            logger.error(f"Failed to send demo request notification email: {e}")

        return Response(
            {
                'message': 'Demo request received. Our team will be in touch within 1–2 business days.',
                'id': demo_request.id,
            },
            status=status.HTTP_201_CREATED
        )


class ContactInquiryView(APIView):
    """
    POST /api/contact/
    Accept general contact form submissions.
    """

    def post(self, request):
        serializer = ContactInquirySerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {'error': 'Invalid form data', 'details': serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        inquiry = serializer.save()
        logger.info(f"New contact inquiry from {inquiry.full_name} — {inquiry.get_inquiry_type_display()}")

        try:
            send_mail(
                subject=f"[Sentr AI] Contact — {inquiry.get_inquiry_type_display()} from {inquiry.full_name}",
                message=(
                    f"New contact inquiry:\n\n"
                    f"Name: {inquiry.full_name}\n"
                    f"Email: {inquiry.email}\n"
                    f"Phone: {inquiry.phone or 'Not provided'}\n"
                    f"Company: {inquiry.company or 'Not provided'}\n"
                    f"Type: {inquiry.get_inquiry_type_display()}\n\n"
                    f"Message:\n{inquiry.message}\n\n"
                    f"Submitted: {inquiry.created_at.strftime('%d %b %Y, %H:%M IST')}\n"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.NOTIFICATION_EMAIL],
                fail_silently=True,
            )
        except Exception as e:
            logger.error(f"Failed to send contact inquiry notification: {e}")

        return Response(
            {'message': 'Thank you for contacting us. We will be in touch shortly.'},
            status=status.HTTP_201_CREATED
        )


class CloudEnquiryView(APIView):
    """
    POST /api/cloud-enquiries/ or /api/cloud-enquiries
    Accept cloud requirement inquiry form submissions.
    """
    def post(self, request):
        serializer = CloudEnquirySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {'error': 'Invalid form data', 'details': serializer.errors},
                status=status.HTTP_400_BAD_REQUEST
            )

        enquiry = serializer.save()
        logger.info(f"New cloud services enquiry from {enquiry.company} ({enquiry.contact_person})")

        try:
            send_mail(
                subject=f"[Sentr AI] Cloud Enquiry — {enquiry.company} ({enquiry.cloud_provider or 'Multi-Cloud'})",
                message=(
                    f"New Cloud Services Requirement Form submitted:\n\n"
                    f"Company: {enquiry.company}\n"
                    f"Contact Person: {enquiry.contact_person}\n"
                    f"Designation: {enquiry.designation or 'Not provided'}\n"
                    f"Email: {enquiry.email}\n"
                    f"Phone: {enquiry.phone}\n"
                    f"Industry: {enquiry.industry or 'Not provided'}\n\n"
                    f"Required Services: {enquiry.services}\n"
                    f"Preferred Cloud Platform: {enquiry.cloud_provider or 'Not provided'}\n"
                    f"Current Infrastructure: {enquiry.infrastructure or 'Not provided'}\n"
                    f"Workload Details:\n{enquiry.workload or 'None'}\n\n"
                    f"Users: {enquiry.users or 'N/A'} | Servers/VMs: {enquiry.servers or 'N/A'}\n"
                    f"OS: {enquiry.os or 'N/A'} | Storage: {enquiry.storage or 'N/A'}\n"
                    f"Migration: {enquiry.migration or 'N/A'}\n"
                    f"Backup: {enquiry.backup or 'N/A'} | Security: {enquiry.security or 'N/A'}\n"
                    f"Availability: {enquiry.availability or 'N/A'} | Region: {enquiry.region or 'N/A'}\n"
                    f"Timeline: {enquiry.timeline or 'N/A'} | Budget: {enquiry.budget or 'N/A'}\n\n"
                    f"Remarks:\n{enquiry.remarks or 'None'}\n\n"
                    f"Submitted: {enquiry.created_at.strftime('%d %b %Y, %H:%M IST')}\n"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.NOTIFICATION_EMAIL],
                fail_silently=True,
            )
        except Exception as e:
            logger.error(f"Failed to send cloud enquiry email notification: {e}")

        return Response(
            {
                'message': 'Thank you! Your cloud requirements have been received. Our cloud experts will contact you shortly.',
                'id': enquiry.id,
            },
            status=status.HTTP_201_CREATED
        )


class HealthCheckView(APIView):
    """
    GET /api/health/
    Simple health check endpoint.
    """
    def get(self, request):
        return Response({'status': 'ok', 'service': 'Sentr AI API'})

from rest_framework.generics import ListAPIView, RetrieveAPIView
from .admin_models import Blog
from .admin_serializers import BlogSerializer

class PublicBlogListView(ListAPIView):
    serializer_class = BlogSerializer
    def get_queryset(self):
        return Blog.objects.filter(status='PUBLISHED').order_by('-published_date', '-created_at')

class PublicBlogDetailView(RetrieveAPIView):
    serializer_class = BlogSerializer
    lookup_field = 'slug'
    def get_queryset(self):
        return Blog.objects.filter(status='PUBLISHED')

