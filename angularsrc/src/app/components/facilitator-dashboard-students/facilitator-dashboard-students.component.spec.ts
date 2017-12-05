import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardStudentsComponent } from './facilitator-dashboard-students.component';

describe('FacilitatorDashboardStudentsComponent', () => {
  let component: FacilitatorDashboardStudentsComponent;
  let fixture: ComponentFixture<FacilitatorDashboardStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
