import { TestBed } from '@angular/core/testing';

import { ProjectInverterService } from './project-inverter.service';

describe('ProjectInverterService', () => {
  let service: ProjectInverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectInverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
