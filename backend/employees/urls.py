from django.urls import path
from . import views

urlpatterns = [

    # employees
    path('employees/', views.EmployeeViewSet.as_view({
        'get': 'list',
        # 'post': 'create',
    }), name='employees'),

    path('employees_search/', views.EmployeeViewSet.as_view({
        'get': 'search',
    }), name='employees_search'),

    path('employees_filter/', views.EmployeeViewSet.as_view({
        'get': 'filter',
    }), name='employees_filter'),

    # employees params
    # -- functional_blocks
    path('functional_blocks/', views.FunctionalBlockViewSet.as_view({
        'get': 'list',
    }), name='functional_blocks'),
    # -- subdivisions_1
    path('subdivisions_1/', views.Subdivision1ViewSet.as_view({
        'get': 'list',
    }), name='subdivisions_1'),
    # -- subdivisions_2
    path('subdivisions_2/', views.Subdivision2ViewSet.as_view({
        'get': 'list',
    }), name='subdivisions_2'),
    # -- subdivisions_3
    path('subdivisions_3/', views.Subdivision3ViewSet.as_view({
        'get': 'list',
    }), name='subdivisions_3'),
    # -- subdivisions_4
    path('subdivisions_4/', views.Subdivision4ViewSet.as_view({
        'get': 'list',
    }), name='subdivisions_4'),
    # -- positions
    path('positions/', views.PositionViewSet.as_view({
        'get': 'list',
    }), name='positions'),
    # -- roles
    path('roles/', views.RoleViewSet.as_view({
        'get': 'list',
    })),
    # -- cities
    path('cities/', views.CityViewSet.as_view({
        'get': 'list',
    })),


]
