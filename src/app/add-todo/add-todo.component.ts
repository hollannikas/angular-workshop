import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(description) {
    this.todoService.addTodo({ description: description});
  }

}
