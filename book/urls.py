from django.urls import path

from book.views import BookList, BookDetail

urlpatterns = [
    path('books', BookList.as_view(), name='books-list'),
    path('books/<int:pk>', BookDetail.as_view(), name='book-detail'),
]
