from django.contrib import admin
from . import models

# Register your models here.


@admin.register(models.Employee)
class EmployeeAdmin(admin.ModelAdmin):
    fields = ('name', 'surname', 'phone', 'city', 'address', 'email', 'position',
              'role', 'functional_block', 'subdivision_1', 'subdivision_2', 'subdivision_3', 'subdivision_4')
    list_display = ('id', 'name', 'surname')
    list_display_links = ('id', 'name', 'surname')


@admin.register(models.FunctionalBlock)
class FunctionalBlockAdmin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.Subdivision1)
class Subdivision1Admin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.Subdivision2)
class Subdivision2Admin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.Subdivision3)
class Subdivision3Admin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.Subdivision4)
class Subdivision4Admin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.Position)
class PositionAdmin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.Role)
class RoleAdmin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


@admin.register(models.City)
class CityAdmin(admin.ModelAdmin):
    fields = ('name', )
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')


