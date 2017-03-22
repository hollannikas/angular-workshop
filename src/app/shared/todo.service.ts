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
    TODOS.forEach((todo, index) => {
      todo['index'] = index;
      this.todos.push(todo);
    });
  }

  getTodos(){
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.reindex();
  }

  private reindex() {
    // reindex
    this.todos.forEach((item, index) => item.index = index);
  }

  removeTodo(todo) {
    const index = this.todos.findIndex(item => item.index === todo.index);
    console.log(index);
    if(index != -1) {
      this.todos.splice(index, 1);
    }
    this.reindex();
  }

}
