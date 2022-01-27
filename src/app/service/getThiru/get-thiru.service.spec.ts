import { TestBed } from '@angular/core/testing';

import { GetThiruService } from './get-thiru.service';

describe('GetThiruService', () => {
  let service: GetThiruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetThiruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
