""" Global variables that can be used site-wide """

APP_NAME = 'temma_legal'
USERNAME_MAX_LENGTH = 30  # Used in project_directory/adpater.py
MAX_FILE_SIZE_IN_MB = 5

# Used in core.forms
# Used in users.models
FIRST_NAME_MAX_LENGTH = 30
LAST_NAME_MAX_LENGTH = 30

# Used in users.models

MANAGER = 'M'
ADMINISTRATION = 'A'
STUDENT = 'C'


USER_TYPE_CHOICES = [(MANAGER, 'Manager'),(ADMINISTRATION, 'Administration'),
                    (STUDENT, 'Student')]
