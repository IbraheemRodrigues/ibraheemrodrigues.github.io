from django.contrib import admin

from .models import Post, GalleryImage

class PostAdmin(admin.ModelAdmin):


    list_display = ('id', '__str__', 'pub_date')
    list_display_links = ('__str__',)

    fieldsets = (
        ('Meta', {
            'classes': ('collapse',),
            'fields': ('id', 'hidden', 'pub_date', 'link')
        }),
        (None, {
            'fields': ('title', 'description', 'link', 'icon', 'icon_url')
        }),
        ('Content', {
            'fields': ('content', 'special_css', 'extra_content'),
        }),
    )



class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ('id', '__str__', 'pub_date')
    list_display_links = ('__str__',)

admin.site.register(Post, PostAdmin)

admin.site.register(GalleryImage, GalleryImageAdmin)
