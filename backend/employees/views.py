from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import (Employee, FunctionalBlock, Subdivision1, Subdivision2,
                     Subdivision3, Subdivision4, Position, Role, City)
from .serializers import (EmployeeSerializer, FunctionalBlockSerializer, Subdivision1Serializer,
                          Subdivision2Serializer, Subdivision3Serializer, Subdivision4Serializer,
                          PositionSerializer, RoleSerializer, CitySerializer)


# -- Отображение справочников и полной таблицы сотрудников -- #

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

    @action(detail=False, methods=['get'])
    def search(self, request, *args, **kwargs):
        """
        Возвращает список сотрудников с их параметрами - список отдается на базе поиска с помощью обученной модели.
        На вход подается query параметр - строка поиска ("Ищу тестировщика из кредитного отдела")

        /api/employees_search?search=Ищу тестировщика из кредитного отдела
        """

        search_text = request.GET.get("search", None)

        if search_text is not None:
            # поиск сотрудников с помощью модели
            employees_ids = [1, 2, 3]
            employees = Employee.objects.filter(id__in=employees_ids)
            return Response(
                data=EmployeeSerializer(employees, many=True).data,
                status=200
            )

        else:
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
    Вьюсет для работы с данными таблицы о позициях (должностях)
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
