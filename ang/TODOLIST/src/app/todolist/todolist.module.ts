import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodolistComponent } from './todolist.component';

@NgModule({
  declarations: [
    TodolistComponent
  ],
  exports: [
    TodolistComponent
  ],
  imports: [
   BrowserModule,
   CommonModule,
   FormsModule
  ],
  providers: []
})
export class TodolistModule { }