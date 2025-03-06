import { TestBed } from '@angular/core/testing';

import { MgsServiceService } from './mgs-service.service';

describe('MgsServiceService', () => {
  let service: MgsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
