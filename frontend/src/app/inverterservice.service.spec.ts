import { TestBed } from '@angular/core/testing';

import { InverterserviceService } from './inverterservice.service';

describe('InverterserviceService', () => {
  let service: InverterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InverterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
