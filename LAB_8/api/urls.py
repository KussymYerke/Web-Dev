from django.urls import path, include, re_path
from api import views
from django.contrib import admin
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.cat_list),
    path('categories/<int:id>/', views.cat_detail),
    path('categories/<int:id>/products/', views.products_by_cat),
]

