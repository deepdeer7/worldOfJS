import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistModule } from './todolist/todolist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TodolistModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
