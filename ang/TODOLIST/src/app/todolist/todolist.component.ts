import { Component, OnInit, ElementRef } from '@angular/core';

import { ToggledTask } from './toggledTask';

@Component({
  selector: 'todo-list', 
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  public listOfTasks: string[] = [];
  public task: string;
  public completedTask: boolean = false;

  public toggledTask: ToggledTask;
  private listOfToggleTasks: ToggledTask[] = [];

  constructor() { }

  ngOnInit() {
  }

  public addTask(task: string): void {
  	if (this.task) {
  	  this.listOfTasks.push(this.task);
  	  this.task = '';
    }
  }

  public toggleStateOfTask(task: any): void {

  	if (this.listOfToggleTasks) {
  	  this.toggledTask = this.listOfToggleTasks.find((el) => task === el.currentTask);
    }

  	if (!this.toggledTask) {
  	  this.toggledTask = {
  		currentTask: task,
  		state: true,
  	  }

  	  this.listOfToggleTasks.push(this.toggledTask);
  	} else {
      this.toggledTask.state = !this.toggledTask.state;
  	}
  }

  public isActive(task: string): boolean {
  	if (!this.listOfToggleTasks.length) {
  	  return false;
  	}

  	let toggleTask = this.listOfToggleTasks.find((el) => task === el.currentTask);
  	if (!toggleTask) {
  		return false;
  	}

  	return toggleTask.currentTask === task && toggleTask.state === true;
  }

  public deleteTask (task: string) {
    const deletedTask = this.listOfTasks.indexOf(task);

    this.listOfTasks.splice(deletedTask, 1);
  }


}
