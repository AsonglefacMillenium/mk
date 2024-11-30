
- Запуск dev-сервера django и веб-сервера nginx с помощью docker-compose:

```bash
# из главной директории проекта (docker должен быть запущен на хост машине)
docker-compose up --build
```

- База данных sqlite3 хранится в репозитории для быстрой развертки (./backend/db.sqlite3)
- Схему реализованных API эндпоинтов можно посмотреть по адресу http://localhost/api/swagger/


