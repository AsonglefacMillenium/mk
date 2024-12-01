
### Проект для участия в хакатоне Hack&Change by Changellenge 2024

#### 1. Информация о команде

**Название команды:** _Всевидящее Око_

**Состав команды:**
- Александр Ли - _Лидер команды, аналитик_ (Tg: @Elson12295)
- Матвей Бедарков - _Data Science\ML_ (Tg: @mabedj)
- Савелий Тимошенко - _Backend-разработчик_ (Tg: @Us_er_less)
- Асонглефак Миллениум Нзефе - _Frontend-разработчик_ (Tg: @Milli_Inspires1)
- Сабина Цеханович - _Дизайнер_ (Tg: @s_tsekhanovich)

#### 2. Трек - №1 от МТС: реализовать сервис визуализации организационной структуры от МТС Линк

Реализованный сервис позволяет находить сотрудников по запросу в свободной форме.

На главной странице выводится основная информация о сервисе и заложена для проработки логика на переход между разделами
поиска, структуры отделов, контактами для связи.

Основная функциональность - на странице поиска. При первичном переходе на эту страницу выводится полный список 
сотрудников из базы данных. При вводе запроса в поисковую строку идет запрос на эндпоинт бэкенда, где обученная модель 
берет на вход эту строку запроса, а на выход отдает записи из БД с сотрудниками, которые ближе всего по параметрам
к этому запросу.

#### 3. Структура проекта

- Директория backend - реализованный бэкенд на Django, DRF, библиотеки для модели (scikit-learn, joblib, nltk)
- Директория frontend - реализованный фронтенд на Next.js
- Служебные файлы проекта (.gitignore, next-env.d.ts, README.md)
- Docker-compose файл для развертывания сервисов

#### 4. Особенности реализации
- База данных sqlite3 хранится в репозитории для быстрой развертки (./backend/db.sqlite3)
- Схему реализованных API эндпоинтов можно посмотреть по адресу http://localhost/api/swagger/
- Все запросы обрабатываются веб-сервером nginx и проксируются на сервера приложений Django (порт 8000) и Next.js 
(порт 3000), которые будут запущены в режиме разработки


#### 5. Запуск сервиса

1. Скачать/склонировать проект на вашу машину
2. Иметь на рабочей машине запущенный Docker с установленным Docker-compose
3. Находясь в главной директории проекта запустить сборку и запуск сервисов: `docker-compose up --build`
4. Все необходимые зависимости будут установлены внутри контейнеров, вручную ничего устанавливать не нужно
5. Клиент будет доступен по адресу http://localhost - можно пользоваться!



