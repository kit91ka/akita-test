import { Component } from '@angular/core';
import {TodoService} from "../state/todo.service";

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  newTodoText: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todoService.addTodo(this.newTodoText);
      this.newTodoText = ''; // Очищаем поле ввода после добавления тудушки
    }
  }
}
