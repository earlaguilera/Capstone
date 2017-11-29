import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardComponentCategories } from './facilitator-dashboard-categories.component';

describe('FacilitatorDashboardComponentCategories', () => {
  let component: FacilitatorDashboardComponentCategories;
  let fixture: ComponentFixture<FacilitatorDashboardComponentCategories>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardComponentCategories ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardComponentCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});