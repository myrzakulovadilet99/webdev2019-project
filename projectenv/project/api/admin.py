from django.contrib import admin
from api.models import Gym, Test, Coach, Client, Feedback, Subscription,About
# Register your models here.

@admin.register(Gym)
class GymAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'created_by')


@admin.register(Coach)
class CoachAdmin(admin.ModelAdmin):
    list_display = ('name', 'gym')


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'gym')


@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ('client',)


@admin.register(Subscription)
class SubsAdmin(admin.ModelAdmin):
    list_display = ('card_number', 'duration', 'has_coach', 'client')


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('client', 'date', 'comment', 'gym')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('text1', 'text2', 'text3')
