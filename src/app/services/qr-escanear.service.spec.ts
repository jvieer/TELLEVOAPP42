import { TestBed } from '@angular/core/testing';

import { QrEscanearService } from './qr-escanear.service';

describe('QrEscanearService', () => {
  let service: QrEscanearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrEscanearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
