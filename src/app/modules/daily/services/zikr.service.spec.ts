import { TestBed } from '@angular/core/testing';

import { ZikrService } from './zikr.service';

describe('ZikrService', () => {
  let service: ZikrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZikrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
