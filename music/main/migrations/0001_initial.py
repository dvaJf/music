# Generated by Django 5.2.4 on 2025-07-09 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(verbose_name='путь')),
                ('name', models.CharField(verbose_name='название')),
            ],
        ),
    ]
