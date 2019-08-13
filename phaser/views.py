from django.shortcuts import render
# from .models import Result
from django.http import JsonResponse,HttpResponse
import datetime
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt

allowed = ['127.0.0.1', '112.201.168.164']


def home(req):
    # return HttpResponse('hello')
    return render(req, 'phaser/home.html')


def game(req):
    res = req.META
    return render(req, 'phaser/index.html', {'res':res})
