"""
Sentr AI API — Models
Contact inquiries and Demo requests
"""
from django.db import models


class DemoRequest(models.Model):
    """
    Indri demo request submitted via the product page form.
    """
    INDUSTRY_CHOICES = [
        ('manufacturing', 'Manufacturing'),
        ('automotive', 'Automotive'),
        ('food-beverage', 'Food & Beverage'),
        ('pharmaceuticals', 'Pharmaceuticals'),
        ('textiles', 'Textiles'),
        ('electronics', 'Electronics'),
        ('chemicals', 'Chemicals'),
        ('engineering', 'Engineering & Fabrication'),
        ('other', 'Other Industrial'),
    ]

    full_name = models.CharField(max_length=200, verbose_name='Full Name')
    company = models.CharField(max_length=200, verbose_name='Company Name')
    email = models.EmailField(verbose_name='Work Email')
    phone = models.CharField(max_length=30, verbose_name='Phone Number')
    industry = models.CharField(max_length=50, choices=INDUSTRY_CHOICES, verbose_name='Industry')
    requirement = models.TextField(blank=True, verbose_name='Requirement Description')
    created_at = models.DateTimeField(auto_now_add=True)
    is_contacted = models.BooleanField(default=False, verbose_name='Contacted?')
    notes = models.TextField(blank=True, verbose_name='Internal Notes')

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Demo Request'
        verbose_name_plural = 'Demo Requests'

    def __str__(self):
        return f"{self.full_name} — {self.company} ({self.created_at.strftime('%d %b %Y')})"


class ContactInquiry(models.Model):
    """
    General contact form submission.
    """
    INQUIRY_CHOICES = [
        ('indri', 'Indri — Intelligent Monitoring'),
        ('cybersecurity', 'Cybersecurity'),
        ('cloud', 'Cloud Infrastructure'),
        ('enterprise-it', 'Enterprise IT Services'),
        ('partnership', 'Partnership'),
        ('general', 'General Inquiry'),
        ('other', 'Other'),
    ]

    full_name = models.CharField(max_length=200, verbose_name='Full Name')
    email = models.EmailField(verbose_name='Email Address')
    phone = models.CharField(max_length=30, blank=True, verbose_name='Phone Number')
    company = models.CharField(max_length=200, blank=True, verbose_name='Company')
    inquiry_type = models.CharField(
        max_length=30, choices=INQUIRY_CHOICES, default='general', verbose_name='Inquiry Type'
    )
    message = models.TextField(verbose_name='Message')
    created_at = models.DateTimeField(auto_now_add=True)
    is_responded = models.BooleanField(default=False, verbose_name='Responded?')

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Inquiry'
        verbose_name_plural = 'Contact Inquiries'

    def __str__(self):
        return f"{self.full_name} — {self.get_inquiry_type_display()} ({self.created_at.strftime('%d %b %Y')})"


class CloudEnquiry(models.Model):
    """
    Cloud services requirement enquiry form submission.
    """
    company = models.CharField(max_length=255, verbose_name='Company Name')
    contact_person = models.CharField(max_length=255, verbose_name='Contact Person')
    designation = models.CharField(max_length=255, blank=True, verbose_name='Designation')
    email = models.EmailField(verbose_name='Business Email')
    phone = models.CharField(max_length=50, verbose_name='Contact Number')
    industry = models.CharField(max_length=100, blank=True, verbose_name='Industry')

    services = models.CharField(max_length=255, verbose_name='Required Services')
    cloud_provider = models.CharField(max_length=100, blank=True, verbose_name='Preferred Cloud Platform')
    infrastructure = models.CharField(max_length=100, blank=True, verbose_name='Current Infrastructure')
    workload = models.TextField(blank=True, verbose_name='Workload Details')

    users = models.CharField(max_length=50, blank=True, verbose_name='Number of Users')
    servers = models.CharField(max_length=50, blank=True, verbose_name='Number of Servers / VMs')
    os = models.CharField(max_length=100, blank=True, verbose_name='Operating System')
    storage = models.CharField(max_length=100, blank=True, verbose_name='Required Storage')
    migration = models.CharField(max_length=100, blank=True, verbose_name='Migration Requirement')

    backup = models.CharField(max_length=100, blank=True, verbose_name='Backup Requirement')
    security = models.CharField(max_length=100, blank=True, verbose_name='Security Requirement')
    availability = models.CharField(max_length=100, blank=True, verbose_name='Availability Requirement')
    region = models.CharField(max_length=100, blank=True, verbose_name='Preferred Data Centre Region')

    timeline = models.CharField(max_length=100, blank=True, verbose_name='Expected Project Timeline')
    budget = models.CharField(max_length=100, blank=True, verbose_name='Estimated Budget')
    remarks = models.TextField(blank=True, verbose_name='Additional Requirements / Remarks')

    created_at = models.DateTimeField(auto_now_add=True)
    is_contacted = models.BooleanField(default=False, verbose_name='Contacted?')
    notes = models.TextField(blank=True, verbose_name='Internal Notes')

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Cloud Services Enquiry'
        verbose_name_plural = 'Cloud Services Enquiries'

    def __str__(self):
        return f"{self.company} ({self.contact_person}) — {self.cloud_provider or 'Cloud'} ({self.created_at.strftime('%d %b %Y')})"


from .admin_models import *
