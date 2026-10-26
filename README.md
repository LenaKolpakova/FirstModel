# Практическая работа №1.1 — Sequelize + SQLite

Консольное приложение на Node.js с ORM Sequelize и SQLite.

## Предметная область

Таблица cars (автомобили).

Поля:
- id — INTEGER, PK, авто
- brand — STRING, обязательное
- model — STRING, обязательное
- year — INTEGER, обязательное
- price — FLOAT, обязательное
- isAvailable — BOOLEAN, по умолчанию true
- createdAt, updatedAt — DATE, авто

## Запуск

npm install
node index.js

## Что делает скрипт

1. Подключается к database.sqlite (создаётся автоматически)
2. Синхронизирует модель Car → таблица cars
3. Добавляет два автомобиля
4. Выводит все записи в консоль
5. Закрывает соединение

## Стек

Node.js, Sequelize, SQLite (sqlite3)