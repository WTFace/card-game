from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,),
    path('bac/', views.game),
    # path('select/<int:id>', views.get_one),
    # path('api/<int:id>', views.api),
]