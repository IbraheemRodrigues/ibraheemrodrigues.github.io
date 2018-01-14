import datetime

from django.db import models
from django.utils import timezone

from filer.fields.image import FilerImageField
from easy_thumbnails.files import get_thumbnailer


class Post(models.Model):

    id = models.IntegerField(primary_key=True)
    hidden = models.BooleanField(default=False)
    pinned = models.BooleanField(default=False)

    title = models.CharField(max_length=200)
    description = models.CharField(blank=True, max_length=400)

    pub_date = models.DateTimeField('date published', default=datetime.datetime.now)
    link = models.CharField(max_length=200, blank=True)

    icon = FilerImageField(related_name="icon_image", null=True, blank=True)
    icon_url = models.CharField(max_length=200, blank=True)

    content = models.TextField(blank=True)
    special_css = models.TextField('Special CSS', blank=True)
    extra_content = models.TextField(blank=True)

    
    def get_link(self):
        return str(self.link) or "/post/" + str(self.id)

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=5)

    def get_icon_url(self):
        try:
            return self.icon.url
        except (ValueError, AttributeError):
            return self.icon_url

    def get_icon_thumb_url(self):
        try:
            return get_thumbnailer(self.icon).get_thumbnail({ "size":( 400, 0 ) }).url
        except (ValueError, AttributeError):
            return self.icon_url




    def __str__(self):
        return self.title

    
    @classmethod
    def get_objects(cls, num=30, page=1):
        return cls.objects.filter(hidden=False).order_by('-pinned', '-pub_date', '-id')[num*(page-1):num*page]

    


class GalleryImage(models.Model):

    id = models.IntegerField(primary_key=True)
    hidden = models.BooleanField(default=False)

    caption= models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)

    pub_date = models.DateTimeField('date published', default=datetime.datetime.now)

    image = FilerImageField(related_name="gallery_image", null=True, blank=True)
    image_url = models.CharField(max_length=200, blank=True)

    link = models.CharField(max_length=200, blank=True)

    def get_image_url(self):
        try:
            return self.image.url
        except (ValueError, AttributeError):
            return self.image_url

    def __str__(self):
        return self.caption or ("Image #%s on %s" % (self.id, self.pub_date.date()))


    @classmethod
    def get_objects(cls, num=30):
        return cls.objects.filter(hidden=False).order_by('-pub_date')[:num]


class Slide(models.Model):

    id = models.IntegerField(primary_key=True)
    hidden = models.BooleanField(default=False)

    caption= models.CharField(max_length=200, blank=True)

    image = FilerImageField(related_name="slide_image", null=True, blank=True)
    image_url = models.CharField(max_length=200, blank=True)

    link = models.CharField(max_length=200, blank=True)

    def get_image_url(self):
        try:
            return self.image.url
        except (ValueError, AttributeError):
            return self.image_url

    def __str__(self):
        return self.caption or ("Slide #%s" % self.id)


    @classmethod
    def get_objects(cls, num=30):
        return cls.objects.filter(hidden=False).order_by('-id')[:num]