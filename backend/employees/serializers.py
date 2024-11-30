from rest_framework import serializers
from . import models


class FunctionalBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FunctionalBlock
        fields = '__all__'


class Subdivision1Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subdivision1
        fields = '__all__'


class Subdivision2Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subdivision2
        fields = '__all__'


class Subdivision3Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subdivision3
        fields = '__all__'


class Subdivision4Serializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subdivision4
        fields = '__all__'


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Position
        fields = '__all__'


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Role
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.City
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Employee
        fields = '__all__'


