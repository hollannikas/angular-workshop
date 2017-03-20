import { Component, OnInit } from '@angular/core';
import {TodoService} from "../shared/todo.service";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(description) {
    this.todoService.addTodo(new Todo(description, false));
  }

}
