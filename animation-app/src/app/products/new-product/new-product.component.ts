import { Component, OnInit } from '@angular/core';
import { ON_OFF_ANIMATION } from '../animation/animation';

@Component({
  selector: 'new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  animations: [ ON_OFF_ANIMATION ]
})
export class NewProductComponent implements OnInit {
  public state: string = 'off';

  constructor() { }

  ngOnInit() {
  }

  public toggleState() {
  	this.state = (this.state === 'off') ? 'on' : 'off';
  }

}
