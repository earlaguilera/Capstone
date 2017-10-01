/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { DocumentDisplayComponent } from './document-display.component';
import { ChallengeService } from '../../services/challenge.service';

class MockChallengeService {
  getCurrentChallengeObservable() {
    return Observable.empty();
  }
}

let challengeService: ChallengeService;
let documentDisplayComponent: DocumentDisplayComponent;

describe('Component: DocumentDisplayComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DocumentDisplayComponent,
        { provide: ChallengeService, useClass: MockChallengeService },
      ]
    });
  });

  beforeEach(inject([ChallengeService, DocumentDisplayComponent],
    (_challengeService: ChallengeService, _documentDisplayComponent: DocumentDisplayComponent) => {
      challengeService = _challengeService;
      documentDisplayComponent = _documentDisplayComponent;
    }));

  it('should create an instance', () => {
    expect(documentDisplayComponent).toBeTruthy();
  });
});
