import {Component, OnInit, Input} from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  remove() {
    this.todoService.removeTodo(this.todo);
  }

}
