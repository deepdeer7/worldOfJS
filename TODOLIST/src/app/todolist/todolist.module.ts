import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todolist.component';

const appRoutes: Routes =[
    { path: '', component: TodoListComponent},
    { path: 'active', component: TodoListComponent},
    { path: 'completed', component: TodoListComponent}
];

@NgModule({
  declarations: [
    TodoListComponent
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class TodoListModule { }