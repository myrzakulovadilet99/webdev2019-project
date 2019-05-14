# Generated by Django 2.2 on 2019-05-13 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_about'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='age',
        ),
        migrations.RemoveField(
            model_name='client',
            name='coach',
        ),
        migrations.RemoveField(
            model_name='client',
            name='image',
        ),
        migrations.RemoveField(
            model_name='client',
            name='registered_date',
        ),
        migrations.AddField(
            model_name='client',
            name='email',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='client',
            name='password',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='client',
            name='phone',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='client',
            name='username',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='coach',
            name='achievement',
            field=models.TextField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='coach',
            name='activity',
            field=models.TextField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='coach',
            name='education',
            field=models.TextField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='coach',
            name='hobby',
            field=models.TextField(default=None, null=True),
        ),
        migrations.AlterField(
            model_name='client',
            name='status',
            field=models.CharField(default=None, max_length=200, null=True),
        ),
    ]