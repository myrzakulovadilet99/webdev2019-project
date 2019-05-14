from rest_framework.decorators import APIView
from api.models import Coach, Gym, Client
from api.serializers import CoachSerializer, ClientSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from rest_framework.permissions import IsAuthenticated, AllowAny

class CoachList(APIView):
    def get_objects(self, pk):
        try:
            gym = Gym.objects.get(id=pk)
            return gym
        except Gym.DoesNotExist as e:
            raise Http404

    def get(self, request, pk):
        gym = self.get_objects(pk)
        coachs = gym.coach_set.all()
        serializer = CoachSerializer(coachs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, pk):
        serializer = CoachSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors)
    permission_classes = (AllowAny,)


class ClientList(APIView):
    def get_objects(self, pk):
        try:
            gym = Gym.objects.get(id=pk)
            return gym
        except Gym.DoesNotExist as e:
             raise Http404
    def get(self, request, pk):
        gym = self.get_objects(pk)
        clients = gym.client_set.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request, pk):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors)
    permission_classes = (AllowAny,)


class ClientDetail(APIView):

    def get_object_gym(self, pk):
        try:
            gym = Gym.objects.get(id=pk)
            return gym
        except Gym.DoesNotExist:
            raise Http404

    def get_object_client(self, pk, pk2):
        try:
            gym = self.get_object_gym(pk)
            client = gym.client_set.get(id=pk2)
            return client
        except Client.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2):
        client = self.get_object_client(pk, pk2)
        serializers = ClientSerializer(client)
        return Response(serializers.data, status=status.HTTP_200_OK)
    permission_classes = (AllowAny,)
