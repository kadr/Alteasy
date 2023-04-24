from django.urls import path

from view_profile.views import ProfileList, ProfileDetail

urlpatterns = [
    path('profiles', ProfileList.as_view(), name='profiles-list'),
    path('profiles/<int:pk>', ProfileDetail.as_view(), name='profile-detail'),
]
