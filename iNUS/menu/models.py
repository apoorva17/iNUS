from django.db import models

class Year(models.Model):
    sem = models.CharField(max_length = 50)

class Sem(models.Model):
    grade = models.CharField(max_length = 3)
    module = models.CharField(max_length = 100)

class Modules(models.Model):
    module_title = models.ForeignKey(Sem, on_delete = models.CASCADE)
    MC = models.IntegerField()