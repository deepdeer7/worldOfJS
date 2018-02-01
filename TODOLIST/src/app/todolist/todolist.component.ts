import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Task } from './task';

@Component({
  selector: 'todo-list', 
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  animations: [
  trigger('taskStateArrow', [
    state('active', style({
      display: 'none'
    })),
    state('inactive',   style({
      fontSize: '24px',
      display: 'inline-block',
      color: '#00FF40',
      paddingTop: '4px',
      paddingLeft: '7px'
    })),
    transition('active => inactive', animate('100ms ease-in')),
    transition('inactive => active', animate('100ms ease-out'))
  ]),
  trigger('taskStateText', [
    state('active', style({
    })),
    state('inactive',   style({
      textDecoration: 'line-through'
    })),
    transition('active => inactive', animate('100ms ease-in')),
    transition('inactive => active', animate('100ms ease-out'))
  ])
]
})
export class TodolistComponent implements OnInit {
  public taskName: string;
  public task: Task;
  public listOfTasks: Task[] = [];
  public hidden: boolean = true;
  private stateOfButton: string = 'all';
  public quantity: number = 0;

  public state: string;

  constructor() { }

  ngOnInit() {
  }

  public addTask(task: string): void {
    if (!this.listOfTasks.length) {
      this.toggleHidden();
    }

  	if (this.taskName) {
      this.task = {
        name: this.taskName,
        state: 'active',
        index: this.listOfTasks.length,
        hidden: false
      }
  	  this.listOfTasks.push(this.task);
  	  this.taskName = '';
    }

    this.quantity = this.countItemsLeft();
  }

  private toggleHidden() {
    this.hidden = !this.hidden;
  }

  public toggleStateOfTask(task: string, i: number): void {

  	this.task = this.listOfTasks.find((el) =>
     task === el.name && i === el.index);

    this.task.state = this.task.state === 'active' ? 'inactive' : 'active';

    if (this.stateOfButton === 'active') {
      this.showActive();
    }

    if (this.stateOfButton === 'completed') {
      this.showCompleted();
    }

    this.quantity = this.countItemsLeft();
  }

  private countItemsLeft (): number {
    let quantity = 0;
    this.listOfTasks.forEach((el) => {
      if (el.state === 'active') {
        quantity++;
      }
    });

    return quantity;
  }

  public deleteTask (task: string, i: number) {
    const deletedTask = this.listOfTasks.find((el) => el.name === task && el.index === i);
    const indexOfDeletedTask = this.listOfTasks.indexOf(deletedTask);

    this.listOfTasks.splice(indexOfDeletedTask, 1);

    if (i !== this.listOfTasks.length) {
      this.updateIndexOfTasks();
    }

    this.quantity = this.countItemsLeft();
  }

  private updateIndexOfTasks() {
    this.listOfTasks.forEach((el, i) => {
      el.index = i;
    });
  }

  public showAll() {
    this.stateOfButton = 'all';

    this.listOfTasks.forEach((el) => {
        el.hidden = false;
    });
  }

  public showActive() {
    this.stateOfButton = 'active';

    this.listOfTasks.forEach((el) => {
      if (el.state === 'inactive') {
        el.hidden = true;
      }

      if (el.state === 'active' && el.hidden === true) {
        el.hidden = false;
      }
    });
  }

  public showCompleted() {
    this.stateOfButton = 'completed';

    this.listOfTasks.forEach((el) => {
      if (el.state === 'active') {
        el.hidden = true;
      }

      if (el.state === 'inactive' && el.hidden === true) {
        el.hidden = false;
      }
    });
  }

  public deleteCompleted() {
    for (let i = 0; i < this.listOfTasks.length; i++) {
      let el = this.listOfTasks[i];

      if (el.state === 'inactive') {
        const indexOfDeletedTask = this.listOfTasks.indexOf(el);

        this.listOfTasks.splice(indexOfDeletedTask, 1);

        if (el.index !== this.listOfTasks.length) {
          this.updateIndexOfTasks();
          i--;
        }
      }
    }
  }
}
