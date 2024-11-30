from django.urls import path
from . import views

urlpatterns = [

    # employees
    path('employees/', views.EmployeeViewSet.as_view({
        'get': 'list',
        # 'post': 'create',
    }), name='employees'),

]
