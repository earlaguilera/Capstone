import { TestBed, inject } from '@angular/core/testing';

import { AllusersService } from './allusers.service';

describe('AllusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllusersService]
    });
  });

  it('should be created', inject([AllusersService], (service: AllusersService) => {
    expect(service).toBeTruthy();
  }));
});
