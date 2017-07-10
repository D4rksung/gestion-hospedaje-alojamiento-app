import { TestBed, inject } from '@angular/core/testing';

import { AlimentosService } from './alimentos.service';

describe('AlimentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimentosService]
    });
  });

  it('should be created', inject([AlimentosService], (service: AlimentosService) => {
    expect(service).toBeTruthy();
  }));
});
