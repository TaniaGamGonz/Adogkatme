import { TestBed } from '@angular/core/testing';

import { ProtectiveService } from './protective.service';

describe('ProtectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtectiveService = TestBed.get(ProtectiveService);
    expect(service).toBeTruthy();
  });
});
