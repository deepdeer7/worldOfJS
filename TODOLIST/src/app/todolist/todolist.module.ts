import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
   FormsModule,
   BrowserAnimationsModule
  ],
  providers: []
})
export class TodolistModule { }