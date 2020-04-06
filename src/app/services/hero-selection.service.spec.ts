import { TestBed } from '@angular/core/testing';

import { HeroSelectionService } from './hero-selection.service';

describe('HeroSelectionService', () => {
  let service: HeroSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
