import { TestBed } from '@angular/core/testing';

import { Reporter } from './reporter';

describe('Reporter', () => {
  let service: Reporter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reporter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
