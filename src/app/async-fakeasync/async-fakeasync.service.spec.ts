import { TestBed, inject } from '@angular/core/testing';

import { AsyncFakeasyncService } from './async-fakeasync.service';

describe('AsyncFakeasyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncFakeasyncService]
    });
  });

  it('should be created', inject([AsyncFakeasyncService], (service: AsyncFakeasyncService) => {
    expect(service).toBeTruthy();
  }));
});
