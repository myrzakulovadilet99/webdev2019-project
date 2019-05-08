from django.contrib import admin
from api.models import Gym, Client

# Register your models here.
@admin.register(Gym)
class GymAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'created_by')
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'registered_date', 'gym', 'coach')

@admin.register(Coach)
class CoachAdmin(admin.ModelAdmin):
    list_display = ('name', 'gym')

@admin.register(Subscription)
class SubsAdmin(admin.ModelAdmin):
    list_display = ('card_number', 'duration', 'has_coach', 'client')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('text1', 'text2', 'text3')