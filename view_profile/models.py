from django.db import models


class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    column_name = models.CharField(max_length=20)
    is_visible = models.BooleanField()

    def __str__(self):
        return f'{self.column_name} - {self.is_visible}'
