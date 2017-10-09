import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesOverviewComponent } from './challenges-overview.component';

describe('ChallengesOverviewComponent', () => {
  let component: ChallengesOverviewComponent;
  let fixture: ComponentFixture<ChallengesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
