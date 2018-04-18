import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPortalComponent } from './forecast-portal.component';

describe('ForecastPortalComponent', () => {
  let component: ForecastPortalComponent;
  let fixture: ComponentFixture<ForecastPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
