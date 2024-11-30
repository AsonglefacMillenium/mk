import os.path

from django.core.management.base import BaseCommand

from django.conf import settings
import pandas as pd

from employees.models import Subdivision1, Subdivision2, Subdivision3, Subdivision4, Position, Role, City, \
    FunctionalBlock, Employee


class Command(BaseCommand):
    help = 'Парсинг данных для ДБ из эксель файла'

    def handle(self, *args, **kwargs):

        file_path = os.path.join(settings.BASE_DIR, 'excel_db.xlsx')
        data = pd.read_excel(file_path)

        for index, row in data.iterrows():
            functional_block_str = str(row['Функциональный блок ']).strip()
            if functional_block_str == 'nan':
                functional_block_str = None
            subdivision_1_str = str(row['Подразделение 1 ']).strip()
            if subdivision_1_str == 'nan':
                subdivision_1_str = None
            subdivision_2_str = str(row['Подразделение 2']).strip()
            if subdivision_2_str == 'nan':
                subdivision_2_str = None
            subdivision_3_str = str(row['Подразделение 3']).strip()
            if subdivision_3_str == 'nan':
                subdivision_3_str = None
            subdivision_4_str = str(row['Подразделение 4']).strip()
            if subdivision_4_str == 'nan':
                subdivision_4_str = None
            position_str = str(row['Должность']).strip()
            if position_str == 'nan':
                position_str = None
            role_str = str(row['Роль ']).strip()
            if role_str == 'nan':
                role_str = None
            city_str = str(row['Город ']).strip()
            if city_str == 'nan':
                city_str = None

            try:
                print(functional_block_str)
                functional_block = FunctionalBlock.objects.get(name=functional_block_str)
                print(functional_block)
            except FunctionalBlock.DoesNotExist:
                functional_block = None

            try:
                subdivision_1 = Subdivision1.objects.get(name=subdivision_1_str)
            except Subdivision1.DoesNotExist:
                subdivision_1 = None

            try:
                subdivision_2 = Subdivision2.objects.get(name=subdivision_2_str)
            except Subdivision2.DoesNotExist:
                subdivision_2 = None

            try:
                subdivision_3 = Subdivision3.objects.get(name=subdivision_3_str)
            except Subdivision3.DoesNotExist:
                subdivision_3 = None

            try:
                subdivision_4 = Subdivision4.objects.get(name=subdivision_4_str)
            except Subdivision4.DoesNotExist:
                subdivision_4 = None

            try:
                position = Position.objects.get(name=position_str)
            except Position.DoesNotExist:
                position = None

            try:
                role = Role.objects.get(name=role_str)
            except Role.DoesNotExist:
                role = None

            try:
                city = City.objects.get(name=city_str)
            except City.DoesNotExist:
                city = None

            name_str = row['Имя ']
            surname_str = row['Фамилия ']
            email_str = row['Почта ']
            address_str = row['Адрес ']
            phone_str = row['Телефон ']

            new_employee = Employee(
                functional_block=functional_block,
                subdivision_1=subdivision_1,
                subdivision_2=subdivision_2,
                subdivision_3=subdivision_3,
                subdivision_4=subdivision_4,
                position=position,
                role=role,
                city=city,
                name=name_str,
                surname=surname_str,
                email=email_str,
                address=address_str,
                phone=phone_str
            )
            new_employee.save()



        # print(data['Функциональный блок '].unique()[1])

        # print(data.columns)
        # ['Подразделение 1 ', 'Функциональный блок ', 'Подразделение 2',
        #        'Подразделение 3', 'Подразделение 4', 'Должность', 'Роль ', 'Фамилия ',
        #        'Имя ', 'Телефон ', 'Город ', 'Адрес ', 'Почта ']

        # functional_blocks = data['Функциональный блок '].unique()
        # subdivisions_1 = data['Подразделение 1 '].unique()
        # subdivisions_2 = data['Подразделение 2'].unique()
        # subdivisions_3 = data['Подразделение 3'].unique()
        # subdivisions_4 = data['Подразделение 4'].unique()
        # positions = data['Должность'].unique()
        # roles = data['Роль '].unique()
        # cities = data['Город '].unique()
        #
        # for functional_block in functional_blocks:
        #     try:
        #         new_functional_block = FunctionalBlock(name=str(functional_block).strip())
        #         new_functional_block.save()
        #     except Exception as e:
        #         continue
        #
        # for subdivision_1 in subdivisions_1:
        #     try:
        #         new_subdivision_1 = Subdivision1(name=str(subdivision_1).strip())
        #         new_subdivision_1.save()
        #     except Exception as e:
        #         continue
        #
        # for subdivision_2 in subdivisions_2:
        #     try:
        #         new_subdivision_2 = Subdivision2(name=str(subdivision_2).strip())
        #         new_subdivision_2.save()
        #     except Exception as e:
        #         continue
        #
        # for subdivision_3 in subdivisions_3:
        #     try:
        #         new_subdivision_3 = Subdivision3(name=str(subdivision_3).strip())
        #         new_subdivision_3.save()
        #     except Exception as e:
        #         continue
        #
        # for subdivision_4 in subdivisions_4:
        #     try:
        #         new_subdivision_4 = Subdivision4(name=str(subdivision_4).strip())
        #         new_subdivision_4.save()
        #     except Exception as e:
        #         continue
        #
        # for position in positions:
        #     try:
        #         new_position = Position(name=str(position).strip())
        #         new_position.save()
        #     except Exception as e:
        #         continue
        #
        # for role in roles:
        #     try:
        #         new_role = Role(name=str(role).strip())
        #         new_role.save()
        #     except Exception as e:
        #         continue
        #
        # for city in cities:
        #     try:
        #         new_city = City(name=str(city).strip())
        #         new_city.save()
        #     except Exception as e:
        #         continue






