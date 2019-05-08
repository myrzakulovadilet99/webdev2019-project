from rest_framework import serializers
from api.models import Client, Gym
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class GymSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    address = serializers.CharField(required=True)
    start_time = serializers.TimeField(required=True)
    end_time = serializers.TimeField(required=True)
    created_by = UserSerializer(read_only=True)
    image = serializers.CharField(required=True)
    simulator_positions = serializers.IntegerField(required=True)
    area = serializers.IntegerField(required=True)
    best_sides = serializers.CharField(required=True)
    def create(self, validated_data):
        gym = Gym(**validated_data)
        gym.save()
        return gym

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.address = validated_data.get('address', instance.address)
        instance.start_time = validated_data.get('start_time', instance.start_time)
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.image = validated_data.get('image', instance.image)
        instance.simular_positions = validated_data.get('simulator_positions', instance.simular_positions)
        instance.area = validated_data.get('area', instance.area)
        instance.best_sides = validated_data.get('best_sides', instance.best_sides)
        instance.save()
        return instance


class ClientSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    age = serializers.IntegerField(required=True)
    status = serializers.CharField(required=True)
    registered_date = serializers.DateTimeField(required=True)
    image = serializers.CharField(required=True)
    coach_id = serializers.IntegerField(write_only=True, required=False)
    gym_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Client
        fields = ('id', 'name', 'surname', 'age', 'status', 'registered_date', 'image', 'coach_id', 'gym_id')


class CoachSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    experience = serializers.IntegerField(required=True)
    work_days = serializers.CharField(required=True)
    image = serializers.CharField(required=True)
    price = serializers.IntegerField(required=True)
    gym_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Coach
        fields = ('id', 'name', 'surname', 'experience', 'work_days', 'image', 'gym_id', 'price')

class SubscriptionSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    card_number = serializers.CharField(required=True)
    price = serializers.IntegerField(required=True)
    duration = serializers.CharField(required=True)
    has_coach = serializers.BooleanField(required=True)
    allowed_from = serializers.TimeField(required=True)
    allowed_until = serializers.TimeField(required=True)
    client_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Subscription
        fields = ('id', 'card_number', 'price', 'duration', 'has_coach', 'allowed_from', 'allowed_until', 'client_id')

class AboutSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    text1 = serializers.CharField(required=True)
    text2 = serializers.CharField(required=True)
    text3 = serializers.CharField(required=True)
    class Meta:
        model = About
        fields = ('id', 'photo', 'text1', 'text2', 'text3')