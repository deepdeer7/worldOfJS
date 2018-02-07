import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListModule } from './todolist/todolist.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
