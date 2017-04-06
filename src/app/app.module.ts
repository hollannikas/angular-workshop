import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoService } from './shared/todo.service';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { RouterModule } from '@angular/router';
import { MyDateFormatPipe } from './shared/my-date-format.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { reducer } from './reducers/todo.reducer';

const appRoutes = [
  { path: '', component: TodoComponent },
  { path: 'todo/:id', component: EditTodoComponent }
];

export function instrumentOptions() {
  return {
    monitor: useLogMonitor( { visible: true, position: 'right' })
  };
}

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
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore( { todos: reducer } ),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
