// Реализация структуры данных Стек (Stack)
class Stack {
    constructor() {
        this.items = [];  // Массив для хранения элементов стека
    }

    // Добавление элемента на вершину стека
    push(element) {
        this.items.push(element);
        return this.items.length;
    }

    // Удаление элемента с вершины стека
    pop() {
        if (this.isEmpty()) {
            return "Стек пуст";
        }
        return this.items.pop();
    }

    // Просмотр элемента на вершине стека без его удаления
    peek() {
        if (this.isEmpty()) {
            return "Стек пуст";
        }
        return this.items[this.items.length - 1];
    }

    // Проверка стека на пустоту
    isEmpty() {
        return this.items.length === 0;
    }

    // Получение размера стека
    size() {
        return this.items.length;
    }

    // Очистка стека
    clear() {
        this.items = [];
    }
}

module.exports = { Stack };
