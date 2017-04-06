import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo;

  hover;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  remove() {
    this.todoService.removeTodo(this.todo).subscribe();
  }

}
