import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private nameEnteredSource = new Subject<string>();

  constructor() {}

  nameEntered$ = this.nameEnteredSource.asObservable();

  public enterName(name: string) {
    this.nameEnteredSource.next(name);
  }
}
