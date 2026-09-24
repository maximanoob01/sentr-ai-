"""
Sentr AI API — Views
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import logging

from .models import DemoRequest, ContactInquiry
from .serializers import DemoRequestSerializer, ContactInquirySerializer

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


class HealthCheckView(APIView):
    """
    GET /api/health/
    Simple health check endpoint.
    """
    def get(self, request):
        return Response({'status': 'ok', 'service': 'Sentr AI API'})
