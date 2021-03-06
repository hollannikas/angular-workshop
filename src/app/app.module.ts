import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoService } from './shared/todo.service';
import { RouterModule } from '@angular/router';
import { MyDateFormatPipe } from './shared/my-date-format.pipe';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';

const appRoutes = [
  { path: '', component: TodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoComponent,
    AddTodoComponent,
    MyDateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore( {todos: reducer}),
    EffectsModule.run(TodoEffects)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
