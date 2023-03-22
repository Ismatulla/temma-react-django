from django.urls import path
from .views import StudentRegistration, ManagerRegistration, UserLogin

app_name='users'
urlpatterns = [
    path('api/student/register/', StudentRegistration.as_view(), name='customer-register'),
    path('api/manager/register/', ManagerRegistration.as_view(), name='employee-register'),
    path('api/login/', UserLogin.as_view(), name='user-login'),
]
