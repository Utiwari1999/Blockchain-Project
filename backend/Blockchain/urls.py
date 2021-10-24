"""Blockchain URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import (
    GenensisBlockAPI, pingurl,
    BlockchainListAPI, FindHashAPI,
    MineBlockAPI, UpdateBlockAPI,
    DistributedBlockchainListAPI,
    MineDistributedBlockAPI,
    UpdateDistributedBlockAPI
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pingurl.as_view()),

    path('api/hash/', FindHashAPI.as_view()),

    path('api/genesis_block/', GenensisBlockAPI.as_view()),

    path('api/blockchain/', BlockchainListAPI.as_view()),
    path('api/mine_block/<int:block_number>/',MineBlockAPI.as_view()),
    path('api/update_block/<int:block_number>/',UpdateBlockAPI.as_view()),

    path('api/distributed_blockchain/', DistributedBlockchainListAPI.as_view()),
    path('api/mine_block/<int:peer_number>/<int:block_number>/', MineDistributedBlockAPI.as_view()),
    path('api/update_block/<int:peer_number>/<int:block_number>/', UpdateDistributedBlockAPI.as_view()),

]
