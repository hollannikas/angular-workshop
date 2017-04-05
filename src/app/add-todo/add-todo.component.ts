import {Component, OnInit, Input} from '@angular/core';
import {TodoService} from "../shared/todo.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() name;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    const todo = { name: this.name, done: false };
    this.todoService.addTodo(todo);
    this.name = '';
  }

}
