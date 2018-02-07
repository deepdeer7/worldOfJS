import { Component, OnInit, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
        paddingLeft: '7px',
        paddingTop: '2px'
    })),
    transition('active => inactive', animate('10ms ease-in')),
    transition('inactive => active', animate('10ms ease-out'))
  ]),
  trigger('taskStateText', [
    state('active', style({
    })),
    state('inactive',   style({
      textDecoration: 'line-through',
        opacity: '0.5'
    })),
    transition('active => inactive', animate('100ms ease-in')),
    transition('inactive => active', animate('100ms ease-out'))
  ]),
    trigger('editableState', [
      state('active', style({
        visibility: 'hidden'
      })),
      state('inactive',   style({
        display: 'inline-block',
        width: '33px',
        height: '33px',
        borderRadius: '50%',
        border: '1px solid #676565',
        marginLeft: '15px',
        marginTop: '15px'
      })),
      transition('active => inactive', animate('10ms ease-in')),
      transition('inactive => active', animate('10ms ease-out'))
    ])
  ]
})
export class TodoListComponent implements OnInit {
  public taskName: string;
  public task: Task;
  public taskList: Task[] = [];
  private buttonState: string = 'all';
  public items: string = 'item';
  public clickedArrow: boolean = false;

  private listenerFnClick: () => void;
  private listenerFnKeyUp: () => void;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private _document) { }

  ngOnInit() {}

  public addTask(task: string): void {
  	if (this.taskName) {
      this.task = {
        name: this.taskName,
        state: 'active',
        index: this.taskList.length,
        hidden: false,
        editable: 'inactive'
      }
  	  this.taskList.push(this.task);
  	  this.taskName = '';
    }

    this.countItemsLeft();
  }

  public toggleStateOfTask(task: Task, i: number): void {
  	this.task = this.taskList.find((el) =>
     task.name === el.name && i === el.index);

    this.task.state = this.task.state === 'active' ? 'inactive' : 'active';

    if (this.buttonState === 'active' || this.buttonState === 'completed') {
      this.show(this.buttonState, 'inactive', 'active');
    }

    this.countItemsLeft();
  }

  private countItemsLeft(): number {
    let itemsLeft = 0;

    this.taskList.forEach((el) => {
      if (el.state === 'active') {
        itemsLeft++;
      }
    });

    if (itemsLeft === 0 && this.taskList.length) {
      this.clickedArrow = true;
    }
    if (this.clickedArrow && itemsLeft) {
      this.clickedArrow = false;
    }

    this.items = (itemsLeft >= 2) ? 'items' : 'item';

    return itemsLeft;
  }

  private countItemsCompleted(): number {
    const itemsLeft = this.countItemsLeft();

    return this.taskList.length - itemsLeft;
  }

  public toggleList(): void {
    if (this.clickedArrow) {
      this.taskList.forEach((el) => {
        if (el.state === 'inactive') {
          el.state = 'active';
        }
      });
    } else {
      this.taskList.forEach((el) => {
        if (el.state === 'active') {
          el.state = 'inactive';
        }
      });
    }

    this.clickedArrow = !this.clickedArrow;
    this.countItemsLeft();
  }

  public deleteTask(task: string, i: number) {
    const deletedTask = this.taskList.find((el) => el.name === task && el.index === i);
    const indexOfDeletedTask = this.taskList.indexOf(deletedTask);

    this.taskList.splice(indexOfDeletedTask, 1);

    if (i !== this.taskList.length) {
      this.updateIndexOfTasks();
    }

    this.countItemsLeft();
  }

  private updateIndexOfTasks() {
    this.taskList.forEach((el, i) => {
      el.index = i;
    });
  }

  public showAll() {
    this.buttonState = 'all';

    this.taskList.forEach((el) => {
        el.hidden = false;
    });
  }

  public show(stateOfButton: string, firstState: string, secondState: string) {
    this.buttonState = stateOfButton;

    this.taskList.forEach((el) => {
      if (el.state === firstState) {
        el.hidden = true;
      }
      if (el.state === secondState && el.hidden === true) {
        el.hidden = false;
      }
    });
  }

  public deleteCompleted() {
    for (let i = 0; i < this.taskList.length; i++) {
      let el = this.taskList[i];

      if (el.state === 'inactive') {
        const indexOfDeletedTask = this.taskList.indexOf(el);

        this.taskList.splice(indexOfDeletedTask, 1);

        if (el.index !== this.taskList.length) {
          this.updateIndexOfTasks();
          i--;
        }
      }
    }
  }

  public changeNameOfTask(task: Task, i: number) {
    const currentTask = this.taskList.find((el) => el.name === task.name && el.index === i);
    currentTask.editable = 'active';

    const deletedElement = this._document.body.querySelectorAll('.name-block')[i];
    const input = this.renderer.createElement('input');
    input.classList.add('changed-input-name');
    input.value = task.name;

    const parent = deletedElement.parentElement;
    this.renderer.removeChild(parent, deletedElement);
    this.renderer.appendChild(parent, input);
    input.focus();

    this.listenerFnKeyUp = this.renderer.listen(parent, 'keyup', (event) => {
      if (event.keyCode === 13 && !!input.value) { // enter
        this.renameOrCancelName(true, currentTask, input, parent, deletedElement);
      }
      if (event.keyCode === 27) { // cancel
        this.renameOrCancelName(false, currentTask, input, parent, deletedElement);
      }
    });

    this.listenerFnClick = this.renderer.listen(this._document.body, 'click', (event) => {
      let target = event.target;

      while ((!target.classList.contains('cross') && target.nodeName === 'BODY') ||
      (target.classList.contains('cross') && target.nodeName !== 'BODY')) {
        if (target === input) {
          return;
        }
        target = target.parentElement;
      }

      this.renameOrCancelName(true, currentTask, input, parent, deletedElement);
    });
  }

  private renameOrCancelName (state: boolean, task: Task, input: any, parent: ElementRef, deletedEl: ElementRef) {
    if (state) {
      task.name = input.value;
    }
    task.editable = 'inactive';
    this.renderer.removeChild(parent, input);
    this.renderer.appendChild(parent, deletedEl);
    this.listenerFnKeyUp();
    this.listenerFnClick();
  }
}
