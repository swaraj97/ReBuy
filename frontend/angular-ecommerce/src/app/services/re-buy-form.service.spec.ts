import { TestBed } from '@angular/core/testing';

import { ReBuyFormService } from './re-buy-form.service';

describe('ReBuyFormService', () => {
  let service: ReBuyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReBuyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
