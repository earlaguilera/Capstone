import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardComponentTasks } from './facilitator-dashboard-tasks.component';

describe('FacilitatorDashboardComponentTasks', () => {
  let component: FacilitatorDashboardComponentTasks;
  let fixture: ComponentFixture<FacilitatorDashboardComponentTasks>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardComponentTasks ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardComponentTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});