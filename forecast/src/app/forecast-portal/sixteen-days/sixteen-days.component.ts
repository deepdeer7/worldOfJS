import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'forecast-sixteen-days',
  templateUrl: './sixteen-days.component.html',
  styleUrls: ['./sixteen-days.component.scss']
})
export class SixteenDaysComponent implements OnInit {
  public state: string = 'temperature';
  private subscription: Subscription;

  constructor(
    private sharedService: SharedService) {}

  ngOnInit() {
    this.setDefaultState();
  }

  public updateState(state: string) {
    this.state = state;
  }

  private setDefaultState() {
    this.subscription = this.sharedService.nameEntered$
      .subscribe(() => {
        this.state = 'temperature';
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


