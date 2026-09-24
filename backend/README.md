# Sentr AI — Backend (Django)

## Requirements

- Python 3.11+
- Django 6.x
- Django REST Framework
- django-cors-headers

## Setup

```bash
# From the backend/ directory:
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The backend will run at http://localhost:8000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/demo-request/` | Submit an Indri demo request |
| POST | `/api/contact/` | Submit a general contact inquiry |
| GET | `/api/health/` | Health check |

## Admin

Access the admin panel at: http://localhost:8000/admin

All demo requests and contact inquiries are managed here.

## Environment

For production, set the following:
- `SECRET_KEY` — Change the secret key
- `ALLOWED_HOSTS` — Add your production domain
- `EMAIL_BACKEND` — Configure SMTP for notification emails
- `NOTIFICATION_EMAIL` — Set the notification recipient email
- `DATABASE_URL` — Configure production database (PostgreSQL recommended)
