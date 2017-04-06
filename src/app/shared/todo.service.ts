import { Injectable } from '@angular/core';

const TODOS = [
  { id: 1, name: 'do laundry', done: false },
  { id: 2, name: 'learn angular', done: false }
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
    // get max ID, add one
    const maxId = this.todos
      .reduce((prev, curr) => Math.max(prev.id, curr.id));
    todo.id = isNaN(maxId) ? 1 : maxId + 1;
    this.todos.push(todo);
  }


  removeTodo(todo) {
    const index = this.todos.findIndex(item => item.id === todo.id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

}
