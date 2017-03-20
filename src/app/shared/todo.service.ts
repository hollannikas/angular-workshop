import { Injectable } from '@angular/core';

const TODOS = [
  { description: 'do laundry', done: false },
  { description: 'learn angular', done: false }
];

@Injectable()
export class TodoService {

  todos = [];

  constructor() {
    // This simulates getting data from a restful service
    TODOS.forEach((todo) => this.todos.push(todo));
  }

  getTodos(){
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.findIndex(item => item === todo);
    if(index != -1) {
      this.todos.splice(index, 1);
    }
  }

}
