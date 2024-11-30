from django.shortcuts import render
from rest_framework import viewsets

from .models import (Employee, FunctionalBlock, Subdivision1, Subdivision2,
                     Subdivision3, Subdivision4, Position, Role, City)
from .serializers import (EmployeeSerializer, FunctionalBlockSerializer, Subdivision1Serializer,
                          Subdivision2Serializer, Subdivision3Serializer, Subdivision4Serializer,
                          PositionSerializer, RoleSerializer, CitySerializer)


class EmployeeViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о сотрудниках
    """

    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список сотрудников с их параметрами
        """
        return super().list(request, *args, **kwargs)


class FunctionalBlockViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о функциональных блоках
    """

    queryset = FunctionalBlock.objects.all()
    serializer_class = FunctionalBlockSerializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список функциональных блоков
        """
        return super().list(request, *args, **kwargs)


class Subdivision1ViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о "подразделениях 1"
    """

    queryset = Subdivision1.objects.all()
    serializer_class = Subdivision1Serializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список подразделений 1
        """
        return super().list(request, *args, **kwargs)


class Subdivision2ViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о "подразделениях 2"
    """

    queryset = Subdivision2.objects.all()
    serializer_class = Subdivision2Serializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список подразделений 2
        """
        return super().list(request, *args, **kwargs)


class Subdivision3ViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о "подразделениях 3"
    """

    queryset = Subdivision3.objects.all()
    serializer_class = Subdivision3Serializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список подразделений 3
        """
        return super().list(request, *args, **kwargs)


class Subdivision4ViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о "подразделениях 4"
    """

    queryset = Subdivision4.objects.all()
    serializer_class = Subdivision4Serializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список подразделений 4
        """
        return super().list(request, *args, **kwargs)


class PositionViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о позициях
    """

    queryset = Position.objects.all()
    serializer_class = PositionSerializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список позиций
        """
        return super().list(request, *args, **kwargs)


class RoleViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о ролях
    """

    queryset = Role.objects.all()
    serializer_class = RoleSerializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список ролей
        """
        return super().list(request, *args, **kwargs)


class CityViewSet(viewsets.ModelViewSet):
    """
    Вьюсет для работы с данными таблицы о городах
    """

    queryset = City.objects.all()
    serializer_class = CitySerializer

    def list(self, request, *args, **kwargs):
        """
        Возвращает список городов
        """
        return super().list(request, *args, **kwargs)
