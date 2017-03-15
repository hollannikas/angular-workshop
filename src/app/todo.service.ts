import { Injectable } from '@angular/core';

const TODOS = [
  { description: 'do laundry' },
  { description: 'learn angular' }
];

@Injectable()
export class TodoService {

  todos = [];

  constructor() {
    this.todos = TODOS;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.findIndex(item => item === todo);
    this.todos.splice(index, 1);
  }

}
