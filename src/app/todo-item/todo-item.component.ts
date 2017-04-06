import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo;

  hover;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  remove() {
    this.todoService.removeTodo(this.todo);
  }

  edit() {
    this.router.navigate(['/todo', this.todo.id]);
  }

}
