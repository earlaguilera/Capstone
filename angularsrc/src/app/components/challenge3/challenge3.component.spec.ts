import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge3Component } from './challenge3.component';

describe('Challenge3Component', () => {
  let component: Challenge3Component;
  let fixture: ComponentFixture<Challenge3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Challenge3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Challenge3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
