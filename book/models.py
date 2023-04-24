from django.db import models


class Book(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    title = models.CharField(max_length=20)
    author = models.CharField(max_length=30)
    description = models.TextField()
    price = models.IntegerField()

    def __str__(self):
        return f'{self.name} - {self.title}'
