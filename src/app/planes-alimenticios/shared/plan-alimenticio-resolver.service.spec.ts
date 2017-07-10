import { TestBed, inject } from '@angular/core/testing';

import { PlanAlimenticioResolverService } from './plan-alimenticio-resolver.service';

describe('PlanAlimenticioResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanAlimenticioResolverService]
    });
  });

  it('should be created', inject([PlanAlimenticioResolverService], (service: PlanAlimenticioResolverService) => {
    expect(service).toBeTruthy();
  }));
});
