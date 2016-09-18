/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ChallengeService } from './challenge.service';

describe('Service: Challenge', () => {
  beforeEach(() => {
    addProviders([ChallengeService]);
  });

  it('should ...',
    inject([ChallengeService],
      (service: ChallengeService) => {
        expect(service).toBeTruthy();
      }));
});
