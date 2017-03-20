import {Component, OnInit, Input} from '@angular/core';
import {TodoService} from "../shared/todo.service";
import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() description = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo(new Todo(this.description, false));
    this.description = '';
  }

}
