import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  remove() {
    this.store.dispatch( {type: 'REMOVE', payload: this.todo});
  }

}
