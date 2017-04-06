import {Component, OnInit, Input} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() name;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  addTodo() {
    const todo = { name: this.name, done: false };
    this.store.dispatch( {type: 'ADD', payload: todo});
    this.name = '';
  }

}
