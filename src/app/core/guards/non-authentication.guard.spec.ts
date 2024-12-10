import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nonAuthenticationGuard } from './non-authentication.guard';

describe('nonAuthenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nonAuthenticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
