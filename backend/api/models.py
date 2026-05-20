from django.db import models


class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.name} - {self.created_at}"

    class Meta:
        ordering = ['-created_at']


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50)  # Font Awesome icon class
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']


class PortfolioItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    tech_stack = models.CharField(max_length=500)
    project_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
