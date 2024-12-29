// Основной файл для запуска всех примеров
const { Queue } = require('./src/data-structures/queue/queue');
const { LinkedList } = require('./src/data-structures/linked-list/linkedList');
const { Stack } = require('./src/data-structures/stack/stack');
const { bubbleSort, quickSort, insertionSort } = require('./src/algorithms/sorting/sorting');

// Примеры использования очереди
console.log('\n=== Демонстрация работы очереди ===');
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Очередь после добавления элементов:', queue.items);
console.log('Удален элемент:', queue.dequeue());
console.log('Текущий первый элемент:', queue.front());

// Примеры использования связного списка
console.log('\n=== Демонстрация работы связного списка ===');
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log('Список после добавления элементов:', list.print());
list.delete(2);
console.log('Список после удаления элемента 2:', list.print());

// Примеры использования стека
console.log('\n=== Демонстрация работы стека ===');
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Стек после добавления элементов:', stack.items);
console.log('Удален элемент:', stack.pop());
console.log('Текущий верхний элемент:', stack.peek());

// Примеры сортировки
console.log('\n=== Демонстрация алгоритмов сортировки ===');
const array = [64, 34, 25, 12, 22, 11, 90];
console.log('Исходный массив:', array);
console.log('Пузырьковая сортировка:', bubbleSort([...array]));
console.log('Быстрая сортировка:', quickSort([...array]));
console.log('Сортировка вставками:', insertionSort([...array]));
