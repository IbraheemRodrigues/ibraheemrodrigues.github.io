from django.shortcuts import get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader

from .models import Post, GalleryImage, Slide

def index(request):
    posts = Post.get_objects()
    slides = Slide.get_objects()
    template = loader.get_template('main/index.html')
    context = {
        'enum_posts': enumerate(posts),
        'slides':slides,
    }
    return HttpResponse(template.render(context, request))



def posts(request):
    num = int(request.GET.get("num", "30") or 30)
    page = int(request.GET.get("page", "1") or 1)
    try:
        posts = Post.get_objects(num, page)
    except (ValueError, IndexError, AssertionError):
        raise Http404
        
    template = loader.get_template('main/posts.html')
    context = {
        'posts': posts,
        'page': page,
        'pages': int(Post.get_len() // num)
    }

    return HttpResponse(template.render(context, request))

def posts_redirect(request, post_id): #redirect /posts/123/ to /post/123/
    return redirect('/posts/%s/' % post_id)

def post_redirect(request): #redirect /post/ to /posts/
    return redirect('/posts/')

def post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    template = loader.get_template('main/post.html')
    context = {
        'post': post,
    }
    return HttpResponse(template.render(context, request))


def gallery(request):
    images = GalleryImage.get_objects()
    template = loader.get_template('main/gallery.html')
    context = {
        'enum_images': enumerate(images),
    }
    return HttpResponse(template.render(context, request))


def test(request):
    return HttpResponse("Hello, world! You're at the test index.")