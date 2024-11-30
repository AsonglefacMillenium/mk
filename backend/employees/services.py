import os.path

from django.db.models import QuerySet

import joblib
from django.conf import settings


def get_employees_by_search_text(search_text: str | None, query_set: QuerySet | None = None) -> QuerySet:

    if search_text is not None:
        # поиск сотрудников с помощью модели
        model = joblib.load(os.path.join(settings.BASE_DIR, 'model.pkl'))

        employees_ids = [1, 2, 3]  # выдача данных от модели
        employees = query_set.filter(id__in=employees_ids)

        return employees

    else:
        return query_set

