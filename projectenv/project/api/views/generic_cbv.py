from rest_framework import generics
from api.models import Gym, Client, Subscription, About
from api.serializers import  SubscriptionSerializer, GymSerializer, AboutSerializer
from django.http import Http404
from rest_framework.permissions import IsAuthenticated, AllowAny


class ShowSubscription(generics.ListCreateAPIView):
    def get_queryset(self):
        try:
            gym = Gym.objects.get(id=self.kwargs.get('pk'))
        except Gym.DoesNotExist:
            raise Http404
        try:
            client = gym.client_set.get(id=self.kwargs.get('pk2'))
        except Client.DoesNotExist:
            raise Http404
        try:
            subscription = client.subscription_set.all()
            return subscription
        except Subscription.DoesNotExist:
            raise Http404
    serializer_class = SubscriptionSerializer
    permission_classes = (IsAuthenticated,)
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class SubscriptionDetail(generics.RetrieveUpdateDestroyAPIView):
    def get_queryset(self):
        try:
            gym = Gym.objects.get(id=self.kwargs.get('pk'))
        except Gym.DoesNotExist:
            raise Http404
        try:
            client = gym.client_set.get(id=self.kwargs.get('pk2'))
        except Client.DoesNotExist:
            raise Http404
        try:
            subscription = client.subscription_set.get(id=self.kwargs.get('pk3'))
            return subscription
        except Subscription.DoesNotExist:
            raise Http404
    serializer_class = SubscriptionSerializer
    permission_classes = (IsAuthenticated,)

class AboutText(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer
    permission_classes = (IsAuthenticated, )
