import { TestBed } from '@angular/core/testing';

import { GestioneDatiServiceService } from './gestione-dati-service.service';

describe('GestioneDatiServiceService', () => {
  let service: GestioneDatiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneDatiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
