# Generated by Django 2.2 on 2019-05-08 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_coach_price'),
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.CharField(max_length=500)),
                ('text1', models.TextField()),
                ('text2', models.TextField()),
                ('text3', models.TextField()),
            ],
        ),
    ]