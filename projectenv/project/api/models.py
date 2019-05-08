from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class GymManager(models.Manager):
    def for_user_order_by_name(self, user):
        return self.filter(created_by=user).order_by('name')


class Gym(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    start_time = models.TimeField()
    end_time = models.TimeField()
    image = models.CharField(max_length=400, default=None, null=True)
    simulator_positions = models.IntegerField(default=None, null=True)
    area = models.IntegerField(default=None, null=True)
    best_sides = models.TextField(default=None, null=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    objects = GymManager()
    def __str__(self):
        return self.name


class Client(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    age = models.IntegerField()
    status = models.CharField(max_length=200)
    registered_date = models.DateTimeField()
    image = models.CharField(max_length=400, default=None, null=True)
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE, default=None, null=True)
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE, default=None, null=True)
    objects = GymManager()

    def __str__(self):
        return self.name

