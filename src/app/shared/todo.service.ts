import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";

const TODOS: Array<Todo> = [
  { description: 'do laundry', done: false },
  { description: 'learn angular', done: false }
];

@Injectable()
export class TodoService {

  private todos: Array<Todo>;

  constructor() {
    this.todos = [];
    // This simulates getting data from a restful service
    TODOS.forEach((todo: Todo) => this.todos.push(todo));
  }

  getTodos(): Array<Todo> {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(todo: Todo) {
    const index = this.todos.findIndex(item => item === todo);
    this.todos.splice(index, 1);
  }

}
