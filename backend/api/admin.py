"""
Sentr AI API — Admin Configuration
"""
from django.contrib import admin
from .models import DemoRequest, ContactInquiry


@admin.register(DemoRequest)
class DemoRequestAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'company', 'email', 'industry', 'created_at', 'is_contacted']
    list_filter = ['industry', 'is_contacted', 'created_at']
    search_fields = ['full_name', 'company', 'email']
    readonly_fields = ['created_at']
    list_editable = ['is_contacted']
    ordering = ['-created_at']
    fieldsets = (
        ('Contact Details', {
            'fields': ('full_name', 'company', 'email', 'phone', 'industry'),
        }),
        ('Request', {
            'fields': ('requirement',),
        }),
        ('Status', {
            'fields': ('is_contacted', 'notes', 'created_at'),
        }),
    )


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'inquiry_type', 'company', 'created_at', 'is_responded']
    list_filter = ['inquiry_type', 'is_responded', 'created_at']
    search_fields = ['full_name', 'email', 'company']
    readonly_fields = ['created_at']
    list_editable = ['is_responded']
    ordering = ['-created_at']


# Customise admin site branding
admin.site.site_header = 'Sentr AI — Admin'
admin.site.site_title = 'Sentr AI Admin'
admin.site.index_title = 'Dashboard'
