import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixteenDaysComponent } from './sixteen-days.component';

describe('SixteenDaysComponent', () => {
  let component: SixteenDaysComponent;
  let fixture: ComponentFixture<SixteenDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixteenDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixteenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
