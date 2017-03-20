import {Component, OnInit, Input} from '@angular/core';
import {TodoService} from "../shared/todo.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() description;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    const todo = { description: this.description, done: false };
    this.todoService.addTodo(todo);
    this.description = '';
  }

}
