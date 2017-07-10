import { TestBed, inject } from '@angular/core/testing';

import { PlanAlimenticioService } from './plan-alimenticio.service';

describe('PlanAlimenticioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanAlimenticioService]
    });
  });

  it('should be created', inject([PlanAlimenticioService], (service: PlanAlimenticioService) => {
    expect(service).toBeTruthy();
  }));
});
