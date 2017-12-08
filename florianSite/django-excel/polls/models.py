from django.db import models


class Person(models.Model):
    nom = models.CharField(max_length=2000)
    contact = models.CharField(max_length=2000)
    role = models.CharField(max_length=500)
    responsable = models.CharField(max_length=2000)
    niveauH = models.CharField(max_length=100)
    equipe = models.CharField(max_length=2000)
    competences = models.CharField(max_length=2000)
    projets = models.CharField(max_length=2000)
    complements = models.CharField(max_length=4000)

    def __str__(self):
        return self.nom

'''
class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE,)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
'''
