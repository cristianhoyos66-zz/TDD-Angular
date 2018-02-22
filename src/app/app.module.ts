import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VotesComponent } from './votes/votes.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './todo/todo.service';
import { AsyncFakeasyncComponent } from './async-fakeasync/async-fakeasync.component';
import { AsyncFakeasyncService } from './async-fakeasync/async-fakeasync.service';


@NgModule({
  declarations: [
    AppComponent,
    VotesComponent,
    TodoFormComponent,
    TodoComponent,
    AsyncFakeasyncComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    TodoService, 
    AsyncFakeasyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
