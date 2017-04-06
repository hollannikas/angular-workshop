import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos;

  constructor(
    private todoService: TodoService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch( {type: 'LOAD'});
    this.todos = this.store.select('todos');
  }

}
