from django.contrib import admin
from api.models import Gym, Client

# Register your models here.
@admin.register(Gym)
class GymAdmin(admin.ModelAdmin):
    list_display = ('name', 'address', 'created_by')
@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'status', 'registered_date', 'gym', 'coach')
