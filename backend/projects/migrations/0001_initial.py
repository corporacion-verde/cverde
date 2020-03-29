# Generated by Django 2.2.3 on 2020-03-29 15:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('title_english', models.CharField(max_length=100)),
                ('description_english', models.TextField()),
                ('code', models.CharField(max_length=20)),
                ('image', models.ImageField(upload_to='images/projects/')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectPicture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/projects_pictures/')),
                ('project', models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.SET_DEFAULT, to='projects.Project')),
            ],
        ),
    ]