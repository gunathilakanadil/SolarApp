import { TestBed } from '@angular/core/testing';

import { ProjectPanelService } from './project-panel.service';

describe('ProjectPanelService', () => {
  let service: ProjectPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
