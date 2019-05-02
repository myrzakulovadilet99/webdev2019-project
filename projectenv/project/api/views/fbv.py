from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from api.models import Gym,Client,Coach,Subscription,Test,Feedback
from api.serializers import GymSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny


@api_view(['POST'])
@permission_classes(IsAuthenticated,)
def gym_list(request):
    serializer = GymSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes(AllowAny,)
def gym_list(request):
    if request.method == 'GET':
        gym_lists = Gym.objects.all()
        serializer = GymSerializer(gym_lists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response({'error': 'bad request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def get_gym_detail(request, pk):
    try:
        gym = Gym.objects.get(id=pk)
    except Gym.DoesNotExist as e:
        return Response({{'error': str(e)}}, status=status.HTTP_204_NO_CONTENT)
    if request.method == 'GET':
        serializer = GymSerializer(gym)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = GymSerializer(instance=gym, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        gym.delete()
        return Response({})
    return Response({'error': 'bad request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)






