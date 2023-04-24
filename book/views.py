import logging

from django.shortcuts import render
from django.views import generic
from rest_framework.response import Response

from book.models import Book
from rest_framework import viewsets, generics
# from rest_framework import permissions
from book.serializers import BookSerializer


class BookList(generics.ListCreateAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Book.objects.all().order_by('title')
    serializer_class = BookSerializer
    # permission_classes = [permissions.IsAuthenticated]


class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

