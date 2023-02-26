import { TestBed } from '@angular/core/testing';

import { AgentecomercialService } from './agentecomercial.service';

describe('AgentecomercialService', () => {
  let service: AgentecomercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentecomercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
