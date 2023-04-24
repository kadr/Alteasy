from django.shortcuts import render
from django.views import generic

from view_profile.models import Profile
from rest_framework import generics, viewsets
from view_profile.serializers import ProfileSerializer


class ProfileList(generics.ListAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Profile.objects.all().order_by('column_name')
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
