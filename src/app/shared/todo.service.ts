import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  listId = 1;
  todos = [];

  constructor(private http: Http) {
    this.updateTodos();
  }

  getTodos() {
    return this.todos;
  }

  updateTodos() {
    this.http.get(`http://gofore-todo.herokuapp.com/todo-lists/${this.listId}`)
      .map(response => response.json())
      .map(data => data.todos)
      .subscribe(todos => {
        this.todos.splice(0, this.todos.length, ...todos);
      });
  }

  addTodo(todo) {
    return this.http.post(`http://gofore-todo.herokuapp.com/todo-lists/${this.listId}`, todo).do(() => this.updateTodos());
  }

  removeTodo(todo) {
    return this.http.delete(`http://gofore-todo.herokuapp.com/todos/${todo.id}`).do(() => this.updateTodos());
  }
}
