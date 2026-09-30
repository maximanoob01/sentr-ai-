from django.db import models
from django.contrib.auth.models import User

# ==========================================
# ADMIN & ROLES
# ==========================================
class AdminProfile(models.Model):
    ROLE_CHOICES = [
        ('SUPER_ADMIN', 'Super Admin'),
        ('CONTENT_ADMIN', 'Content Admin'),
        ('RECRUITMENT_ADMIN', 'Recruitment Admin'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='admin_profile')
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='CONTENT_ADMIN')
    status = models.BooleanField(default=True)
    last_login_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} ({self.role})"


# ==========================================
# MEDIA CMS
# ==========================================
class Media(models.Model):
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='media/')
    alt_text = models.CharField(max_length=255, blank=True)
    caption = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='uploaded_media')

    def __str__(self):
        return self.title

# ==========================================
# BLOG CMS
# ==========================================
class BlogCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)
    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Blog(models.Model):
    STATUS_CHOICES = [
        ('DRAFT', 'Draft'),
        ('PUBLISHED', 'Published'),
        ('SCHEDULED', 'Scheduled'),
        ('ARCHIVED', 'Archived'),
    ]
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(BlogCategory, on_delete=models.SET_NULL, null=True, related_name='blogs')
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='blogs')
    featured_image = models.ImageField(upload_to='blogs/', null=True, blank=True)
    short_description = models.TextField()
    content = models.TextField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='DRAFT')
    
    published_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views = models.PositiveIntegerField(default=0)
    allow_comments = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)

    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)
    seo_keywords = models.CharField(max_length=255, blank=True)
    canonical_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

# ==========================================
# CAREERS CMS
# ==========================================
class Job(models.Model):
    STATUS_CHOICES = [
        ('DRAFT', 'Draft'),
        ('PUBLISHED', 'Published'),
        ('CLOSED', 'Closed'),
    ]
    title = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    department = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    work_mode = models.CharField(max_length=50, choices=[('On-site', 'On-site'), ('Hybrid', 'Hybrid'), ('Remote', 'Remote')])
    employment_type = models.CharField(max_length=50, choices=[('Full-time', 'Full-time'), ('Part-time', 'Part-time'), ('Internship', 'Internship'), ('Contract', 'Contract')])
    experience_required = models.CharField(max_length=100, blank=True)
    salary_range = models.CharField(max_length=100, blank=True)
    
    description = models.TextField()
    responsibilities = models.TextField()
    requirements = models.TextField()
    preferred_skills = models.TextField(blank=True)
    benefits = models.TextField(blank=True)
    
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='DRAFT')
    application_deadline = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    seo_title = models.CharField(max_length=255, blank=True)
    seo_description = models.TextField(blank=True)

    def __str__(self):
        return self.title

class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('NEW', 'New'),
        ('REVIEW', 'Under Review'),
        ('SHORTLISTED', 'Shortlisted'),
        ('INTERVIEW', 'Interview'),
        ('SELECTED', 'Selected'),
        ('REJECTED', 'Rejected'),
        ('WITHDRAWN', 'Withdrawn'),
    ]
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    application_id = models.CharField(max_length=20, unique=True)
    
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    current_job_title = models.CharField(max_length=100, blank=True)
    years_of_experience = models.CharField(max_length=50)
    preferred_location = models.CharField(max_length=100, blank=True)
    linkedin_url = models.URLField(blank=True)
    portfolio_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    
    cover_letter = models.TextField(blank=True)
    resume = models.FileField(upload_to='resumes/')
    consent_given = models.BooleanField(default=False)
    
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='NEW')
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.job.title}"

class ApplicationNote(models.Model):
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='notes')
    note = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class ApplicationStatusHistory(models.Model):
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='status_history')
    previous_status = models.CharField(max_length=50)
    new_status = models.CharField(max_length=50)
    changed_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    changed_at = models.DateTimeField(auto_now_add=True)

# ==========================================
# PAGE CONTENT, FAQS, TESTIMONIALS
# ==========================================
class PageContent(models.Model):
    page_identifier = models.CharField(max_length=100, unique=True) # e.g. 'homepage', 'about'
    title = models.CharField(max_length=255)
    content_data = models.JSONField(default=dict) # Store flexible schema for page sections
    updated_at = models.DateTimeField(auto_now=True)

class FAQ(models.Model):
    question = models.CharField(max_length=500)
    answer = models.TextField()
    category = models.CharField(max_length=100, blank=True)
    page_assignment = models.CharField(max_length=100, blank=True) # e.g. 'homepage', 'cloud'
    display_order = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)

class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    testimonial = models.TextField()
    photo = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.BooleanField(default=True)
    display_order = models.IntegerField(default=0)

# ==========================================
# SITE SETTINGS & SEO
# ==========================================
class SiteSettings(models.Model):
    key = models.CharField(max_length=100, unique=True)
    value = models.JSONField(default=dict)
    
class SEO(models.Model):
    target_type = models.CharField(max_length=50) # 'page', 'blog', 'job'
    target_id = models.CharField(max_length=100) # slug or page identifier
    seo_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)
    canonical_url = models.URLField(blank=True)
    og_title = models.CharField(max_length=255, blank=True)
    og_description = models.TextField(blank=True)
    og_image = models.ForeignKey(Media, on_delete=models.SET_NULL, null=True, blank=True)
    noindex = models.BooleanField(default=False)

# ==========================================
# ACTIVITY LOG
# ==========================================
class ActivityLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    action = models.CharField(max_length=255)
    resource_type = models.CharField(max_length=100)
    resource_id = models.CharField(max_length=100, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
