from rest_framework import serializers
from view_profile.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'column_name', 'is_visible']
