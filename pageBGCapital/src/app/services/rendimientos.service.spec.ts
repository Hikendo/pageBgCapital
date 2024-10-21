import { TestBed } from '@angular/core/testing';

import { RendimientosService } from './rendimientos.service';

describe('RendimientosService', () => {
  let service: RendimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
