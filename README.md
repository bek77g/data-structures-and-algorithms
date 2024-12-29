# Структуры данных и алгоритмы

Практическая реализация основных структур данных и алгоритмов на Node.js с подробными комментариями.

## Структура проекта

```
data-structures-and-algorithms/
├── src/
│   ├── data-structures/
│   │   ├── queue/          # Реализация очереди
│   │   ├── stack/          # Реализация стека
│   │   └── linked-list/    # Реализация связного списка
│   └── algorithms/
│       └── sorting/        # Алгоритмы сортировки
├── tests/                  # Модульные тесты
├── docs/                   # Документация
├── index.js               # Точка входа
├── package.json           # Конфигурация проекта
└── README.md              # Описание проекта
```

## Содержание

1. **Структуры данных**
   - **Очередь (Queue)** - Реализация структуры данных очереди (FIFO)
   - **Стек (Stack)** - Реализация структуры данных стека (LIFO)
   - **Линейный список (Linked List)** - Реализация односвязного списка

2. **Алгоритмы**
   - **Сортировка**
     - Пузырьковая сортировка (Bubble Sort)
     - Быстрая сортировка (Quick Sort)
     - Сортировка вставками (Insertion Sort)

## Запуск примеров

Для запуска всех примеров используйте:

```bash
node index.js
```

Для запуска отдельных примеров:

```bash
node src/data-structures/queue/queue.js     # Пример очереди
node src/data-structures/stack/stack.js     # Пример стека
node src/data-structures/linked-list/linkedList.js  # Пример списка
node src/algorithms/sorting/sorting.js      # Примеры сортировки
```

## Автор

Beknur Zheenkulov

## Лицензия

ISC
