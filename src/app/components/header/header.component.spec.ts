/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { HeaderComponent } from './header.component';
import { ChallengeService } from '../../services/challenge.service';

class MockChallengeService {
  getCurrentChallengeObservable() {
    return Observable.empty();
  }
}

let challengeService: ChallengeService;
let headerComponent: HeaderComponent;

describe('Component: HeaderComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeaderComponent,
        { provide: ChallengeService, useClass: MockChallengeService },
      ]
    });
  });

  beforeEach(inject([ChallengeService, HeaderComponent],
    (_challengeService: ChallengeService, _headerComponent: HeaderComponent) => {
      challengeService = _challengeService;
      headerComponent = _headerComponent;
    }));

  it('should create an instance', () => {
    expect(headerComponent).toBeTruthy();
  });
});
