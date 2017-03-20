import { Component, OnInit } from '@angular/core';
import {TodoService} from "../shared/todo.service";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Array<Todo>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
