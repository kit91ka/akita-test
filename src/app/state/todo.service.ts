import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';
import { TodoStore } from './todo.store';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todo' })
export class TodoService extends EntityStore<EntityState<Todo>, Todo> {
  constructor(private todoStore: TodoStore) {
    super();
  }
  addTodo(todoText: string) {
    // Создаем новый объект Todo
    const newTodo: Todo = { text: todoText, completed: false, id: +new Date() };

    // Используем метод add, чтобы добавить новую тудушку в хранилище
    this.todoStore.add(newTodo);
  }

  toggleTodoCompletion(id: number) {
    this.todoStore.update(id, (todo) => ({ completed: !todo.completed }));
  }
}
