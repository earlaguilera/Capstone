import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorDashboardComponentEditor } from './facilitator-dashboard-editor.component';

describe('FacilitatorDashboardComponentEditor', () => {
  let component: FacilitatorDashboardComponentEditor;
  let fixture: ComponentFixture<FacilitatorDashboardComponentEditor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitatorDashboardComponentEditor ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorDashboardComponentEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});