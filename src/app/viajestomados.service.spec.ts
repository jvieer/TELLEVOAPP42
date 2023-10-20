import { TestBed } from '@angular/core/testing';

import { ViajestomadosService } from './viajestomados.service';

describe('ViajestomadosService', () => {
  let service: ViajestomadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajestomadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
