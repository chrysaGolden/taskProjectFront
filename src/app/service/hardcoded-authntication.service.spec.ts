import { TestBed } from '@angular/core/testing';

import { HardcodedAuthnticationService } from './hardcoded-authntication.service';

describe('HardcodedAuthnticationService', () => {
  let service: HardcodedAuthnticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthnticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
