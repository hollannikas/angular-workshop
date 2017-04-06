import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const id = +params['id'];
        const todos = this.todoService.getTodos();
        const index = todos.findIndex(item => item.id === id);
        if (index !== -1) {
          this.todo = todos[index];
        }
      });
  }

}
