from django.db import models

class song(models.Model):
    url= models.CharField("путь")
    name = models.CharField("название")
    img = models.CharField("картинка",default=None)
    
    def __str__(self):
        return self.url