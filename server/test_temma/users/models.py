from django.db import models
# from rest_framework import serializers

from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

# from rest_auth.registration.serializers import RegisterSerializer
from users.appvars import (
    MANAGER, ADMINISTRATION, STUDENT, USER_TYPE_CHOICES,
    FIRST_NAME_MAX_LENGTH, LAST_NAME_MAX_LENGTH
)
from users.functions import (
    user_default_pro_pic, user_dir_manager, user_dir_student,
    user_dir_admins, resize_image, file_size
)
from django.contrib.auth.models import AbstractUser


class Manager(AbstractUser):

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='managers_group',
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='manager_permissions',
        blank=True,
    )
    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH, blank=True, verbose_name="First Name")
    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH, blank=True, verbose_name="Last Name")
    pro_pic = models.ImageField(
        upload_to=user_dir_manager, default=user_default_pro_pic, verbose_name="Manager Avatar")
    
    GENDER_CHOICES = [('', 'Select'), ('F', 'Female'),
                ('M', 'Male'), ('O', 'Other')]
    stay_anonymous = models.BooleanField(default=False)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    role = models.CharField(max_length=1, choices=USER_TYPE_CHOICES, default=MANAGER)

class Student(AbstractUser):

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='students_group',
        blank=True,
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='student_permissions',
        blank=True,
    )

    first_name = models.CharField(
        max_length=FIRST_NAME_MAX_LENGTH, blank=True, verbose_name="First Name")
    last_name = models.CharField(
        max_length=LAST_NAME_MAX_LENGTH, blank=True, verbose_name="Last Name")
    pro_pic = models.ImageField(upload_to=user_dir_manager, 
        default=user_default_pro_pic, verbose_name="Manager Avatar", blank=True)
    
    # studies = models.ManyToManyField("club.ClubCourses", blank=True, default="None",)

    GENDER_CHOICES = [('', 'Select'), ('F', 'Female'),
                ('M', 'Male'), ('O', 'Other')]
    stay_anonymous = models.BooleanField(default=False)
    
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    role = models.CharField(max_length=1, choices=USER_TYPE_CHOICES, default=STUDENT)
