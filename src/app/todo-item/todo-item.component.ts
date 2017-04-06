import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

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
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  remove() {
    this.store.dispatch({type: 'REMOVE', payload: this.todo});
  }

  edit() {
    this.router.navigate(['/todo', this.todo.id]);
  }

}
