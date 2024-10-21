import { TestBed } from '@angular/core/testing';

import { RendimientosAnualesService } from './rendimientos-anuales.service';

describe('RendimientosAnualesService', () => {
  let service: RendimientosAnualesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendimientosAnualesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
