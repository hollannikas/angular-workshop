import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class TodoService {

  constructor(private http: Http) {
  }

  getTodos() {
    return this.http.get('http://gofore-todo.herokuapp.com/todo-lists/1')
      .map(response => response.json())
      .map(data => data.todos);
  }

  addTodo(todo) {
    return this.http.post('http://gofore-todo.herokuapp.com/todo-lists/1', todo);
  }

  removeTodo(todo) {
    return this.http.delete(`http://gofore-todo.herokuapp.com/todos/${todo.id}`);
  }
}
