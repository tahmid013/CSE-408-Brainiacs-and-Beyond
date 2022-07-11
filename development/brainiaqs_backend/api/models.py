from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50,unique=True,default=None)
    name = models.CharField(max_length=50,default=None)
    email = models.EmailField(max_length=50,unique=True,default=None)
    password = models.CharField(max_length=50,default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    
    

