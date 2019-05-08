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


class Coach(models.Model):
    name = models.CharField(max_length=200)
    surname = models.CharField(max_length=200)
    # photo = models.ImageField()
    experience = models.IntegerField()
    work_days = models.CharField(max_length=200)
    image = models.CharField(max_length=400, default=None, null=True)
    price = models.IntegerField(default=None, null=True)
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE, default=None, null=True)
    objects = GymManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'coach'
        verbose_name_plural = 'coaches'


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


class Test(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, default=None, null=True)
    height = models.IntegerField()
    weight = models.FloatField()
    chest_girth = models.FloatField()
    waist_circumference = models.FloatField()
    hip_girth = models.FloatField()
    body_type = models.CharField(max_length=200)
    objects = GymManager()

    def __str__(self):
        return self.client.name


class Subscription(models.Model):
    card_number = models.CharField(max_length=200)
    price = models.IntegerField()
    duration = models.CharField(max_length=200)
    has_coach = models.BooleanField(default=False)
    allowed_from = models.TimeField()
    allowed_until = models.TimeField()
    client = models.ForeignKey(Client, on_delete=models.CASCADE, default=None, null=True)
    objects = GymManager()

    def __str__(self):
        return self.client.name


class Feedback(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, default=None, null=True)
    date = models.DateTimeField()
    comment = models.CharField(max_length=1000)
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE, default=None, null=True)
    objects = GymManager()

    def __str__(self):
        return self.client.name

class About(models.Model):
    photo = models.CharField(max_length=500)
    text1 = models.TextField()
    text2 = models.TextField()
    text3 = models.TextField()

    def __str__(self):
        return self.text2





