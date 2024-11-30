import os.path

from django.db.models import QuerySet

import joblib
from django.conf import settings

import os
import re
import joblib
from django.conf import settings
from django.http import JsonResponse
from sklearn.metrics.pairwise import cosine_similarity
from rapidfuzz import process, fuzz
from nltk.corpus import stopwords
import pandas as pd

# Загрузка стоп-слов
import nltk
nltk.download('stopwords')
stop_words = set(stopwords.words('russian'))


# Функция нормализации текста
def normalize_text(text):
    text = text.lower()
    text = re.sub(r'-', ' ', text)
    text = re.sub(r'[^\w\s]', '', text)
    return text


# Функция исправления слов
def correct_word(word, unique_words):
    match = process.extractOne(word, unique_words, scorer=fuzz.WRatio)
    if match and match[1] > 80:
        return match[0]
    else:
        return word


# Функция для поиска сотрудников
def search_employees(user_query):
    # Загрузка модели
    model_path = os.path.join(settings.BASE_DIR, 'model.pkl')
    model_data = joblib.load(model_path)
    vectorizer = model_data['vectorizer']
    tfidf_matrix = model_data['tfidf_matrix']
    df = model_data['data']

    # Обработка запроса пользователя
    query = normalize_text(user_query)
    tokens = [word for word in query.split() if word not in stop_words]
    processed_query = ' '.join(tokens)

    # Обработка опечаток
    unique_words = list(set(' '.join(df['combined_text']).split()))
    corrected_query_words = [correct_word(word, unique_words) for word in processed_query.split()]
    corrected_query = ' '.join(corrected_query_words)

    # Векторизация запроса
    query_vec = vectorizer.transform([corrected_query])

    # Вычисление сходства
    similarities = cosine_similarity(query_vec, tfidf_matrix).flatten()
    df['similarity'] = similarities

    # Ранжирование результатов
    results = df.sort_values(by='similarity', ascending=False)

    # Возвращаем топ-10 результатов
    top_results = results.head(10)

    return list(map(lambda x: x['id'], top_results.to_dict(orient='records')))


def get_employees_by_search_text(search_text: str | None, query_set: QuerySet | None = None) -> QuerySet:

    if search_text is not None:

        result_ids = search_employees(search_text)

        print(result_ids)

        # dev
        result_ids = list(map(lambda x: x - 214, result_ids))

        employees = query_set.filter(id__in=result_ids)
        return employees
    else:
        return query_set

