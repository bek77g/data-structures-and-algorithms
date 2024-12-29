// Класс для узла списка
class Node {
    constructor(data) {
        this.data = data;    // Данные узла
        this.next = null;    // Ссылка на следующий узел
    }
}

// Реализация структуры данных Линейный Список
class LinkedList {
    constructor() {
        this.head = null;    // Указатель на первый элемент списка
    }

    // Добавление элемента в конец списка
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Добавление элемента в начало списка
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Удаление элемента по значению
    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Вывод списка
    print() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return elements.join(" -> ");
    }
}

module.exports = { LinkedList, Node };
