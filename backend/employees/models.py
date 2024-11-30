from django.db import models
from django.db.models import ForeignKey


class BaseParamModel(models.Model):
    name = models.CharField(max_length=100, unique=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class FunctionalBlock(BaseParamModel):

    class Meta:
        verbose_name = "Функциональный блок"
        verbose_name_plural = "Функциональные блоки"


class Subdivision1(BaseParamModel):

    class Meta:
        verbose_name = "Подразделение 1"
        verbose_name_plural = "Подразделения 1"


class Subdivision2(BaseParamModel):

    class Meta:
        verbose_name = "Подразделение 2"
        verbose_name_plural = "Подразделения 2"


class Subdivision3(BaseParamModel):

    class Meta:
        verbose_name = "Подразделение 3"
        verbose_name_plural = "Подразделения 3"


class Subdivision4(BaseParamModel):

    class Meta:
        verbose_name = "Подразделение 4"
        verbose_name_plural = "Подразделения 4"


class Position(BaseParamModel):

    class Meta:
        verbose_name = "Должность"
        verbose_name_plural = "Должности"


class Role(BaseParamModel):

    class Meta:
        verbose_name = "Роль"
        verbose_name_plural = "Роли"


class City(BaseParamModel):

    class Meta:
        verbose_name = "Город"
        verbose_name_plural = "Города"


class Employee(models.Model):
    functional_block = ForeignKey(FunctionalBlock, null=True, on_delete=models.SET_NULL)
    subdivision_1 = ForeignKey(Subdivision1, null=True, on_delete=models.SET_NULL)
    subdivision_2 = ForeignKey(Subdivision2, null=True, on_delete=models.SET_NULL)
    subdivision_3 = ForeignKey(Subdivision3, null=True, on_delete=models.SET_NULL)
    subdivision_4 = ForeignKey(Subdivision4, null=True, on_delete=models.SET_NULL)
    position = ForeignKey(Position, null=True, on_delete=models.SET_NULL)
    role = ForeignKey(Role, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=20, null=True)
    city = ForeignKey(City, null=True, on_delete=models.SET_NULL)
    address = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=100, null=True)

    class Meta:
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"

    def __str__(self):
        return self.name + ' ' + self.surname
