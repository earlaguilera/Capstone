import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardComponent } from './facilitator-dashboard.component';

describe('FacilitatorDashboardComponent', () => {
  let component: FacilitatorDashboardComponent;
  let fixture: ComponentFixture<FacilitatorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});