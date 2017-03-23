import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoService } from "./shared/todo.service";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { RouterModule } from "@angular/router";
import { MyDateFormatPipe } from './my-date-format.pipe';

const appRoutes = [
  { path: '', component: TodoComponent },
  { path: 'todo/:index', component: EditTodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    MyDateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
