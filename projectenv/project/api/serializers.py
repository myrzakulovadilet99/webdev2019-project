from rest_framework import serializers
from api.models import Client, Coach, Test, Subscription, Gym
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

    def create(self, validated_data):
        gym = Gym(**validated_data)
        gym.save()
        return gym

    def update(self, instance, validated_data):
        instance.address = validated_data.get('address', instance.address)
        instance.start_time = validated_data.get('start_time', instance.start_time)
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.save()
        return instance


class CoachSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    #photo = serializers.ImageField(required=True)
    experience = serializers.IntegerField(required=True)
    work_days = serializers.CharField(required=True)
    gym_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Coach
        fields = ('id', 'name', 'surname', 'experience', 'work_days', 'gym_id')


class ClientSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    surname = serializers.CharField(required=True)
    age = serializers.IntegerField(required=True)
    status = serializers.CharField(required=True)
    registered_date = serializers.DateTimeField(required=True)
    coach_id = serializers.IntegerField(write_only=True, required=False)
    gym_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Client
        fields = ('id', 'name', 'surname', 'age', 'status', 'registered_date', 'coach_id', 'gym_id')


class FeedbackSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    client = ClientSerializer(required=True)
    date = serializers.DateField(required=True)
    comment = serializers.CharField(required=True)
    feedback_to = GymSerializer()

class TestSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    client_id = serializers.IntegerField(write_only=True)
    height = serializers.IntegerField(required=True)
    weight = serializers.FloatField(required=True)
    chest_girth = serializers.FloatField(required=True)
    waist_circumference = serializers.FloatField(required=True)
    hip_girth = serializers.FloatField(required=True)
    body_type = serializers.CharField(required=True)
    class Meta:
        model = Test
        fields = ('id', 'client_id', 'height', 'weight', 'chest_girth', 'waist_circumference', 'hip_girth', 'body_type')

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





