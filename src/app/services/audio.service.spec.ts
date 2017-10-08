/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AudioService } from './audio.service';

describe('Service: Audio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AudioService]
    });
  });

  it('should ...', inject([AudioService], (service: AudioService) => {
    expect(service).toBeTruthy();
  }));
});
