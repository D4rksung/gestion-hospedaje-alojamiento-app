import { TestBed, inject } from '@angular/core/testing';

import { InformacionNutricionalService } from './informacion-nutricional.service';

describe('InformacionNutricionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InformacionNutricionalService]
    });
  });

  it('should be created', inject([InformacionNutricionalService], (service: InformacionNutricionalService) => {
    expect(service).toBeTruthy();
  }));
});
