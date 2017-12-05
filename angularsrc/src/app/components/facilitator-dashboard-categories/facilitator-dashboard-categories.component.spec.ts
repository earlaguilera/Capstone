import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardCategoriesComponent } from './facilitator-dashboard-categories.component';

describe('FacilitatorDashboardCategoriesComponent', () => {
  let component: FacilitatorDashboardCategoriesComponent;
  let fixture: ComponentFixture<FacilitatorDashboardCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
