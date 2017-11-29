import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardComponentStudents } from './facilitator-dashboard-students.component';

describe('FacilitatorDashboardComponentStudents', () => {
  let component: FacilitatorDashboardComponentStudents;
  let fixture: ComponentFixture<FacilitatorDashboardComponentStudents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardComponentStudents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardComponentStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});