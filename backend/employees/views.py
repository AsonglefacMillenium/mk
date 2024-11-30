from django.shortcuts import render
from rest_framework import viewsets

from .models import Employee
from .serializers import EmployeeSerializer


# Create your views here.


class EmployeeViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными о сотрудниках
    """

    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список сотрудников с их параметрами
        """
        return super().list(request, *args, **kwargs)




