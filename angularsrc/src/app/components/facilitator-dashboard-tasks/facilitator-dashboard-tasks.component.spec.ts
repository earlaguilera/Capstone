import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardTasksComponent } from './facilitator-dashboard-tasks.component';

describe('FacilitatorDashboardTasksComponent', () => {
  let component: FacilitatorDashboardTasksComponent;
  let fixture: ComponentFixture<FacilitatorDashboardTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
