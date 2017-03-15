import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
