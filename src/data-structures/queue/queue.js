// Реализация структуры данных Очередь (Queue)
class Queue {
    constructor() {
        this.items = [];  // Массив для хранения элементов очереди
    }

    // Добавление элемента в конец очереди
    enqueue(element) {
        this.items.push(element);
        return this.items.length;
    }

    // Удаление элемента из начала очереди
    dequeue() {
        if (this.isEmpty()) {
            return "Очередь пуста";
        }
        return this.items.shift();
    }

    // Просмотр первого элемента очереди без его удаления
    front() {
        if (this.isEmpty()) {
            return "Очередь пуста";
        }
        return this.items[0];
    }

    // Проверка очереди на пустоту
    isEmpty() {
        return this.items.length === 0;
    }

    // Получение размера очереди
    size() {
        return this.items.length;
    }

    // Очистка очереди
    clear() {
        this.items = [];
    }
}

module.exports = { Queue };
