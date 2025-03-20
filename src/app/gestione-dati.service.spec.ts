import { TestBed } from '@angular/core/testing';

import { GestioneDatiService } from './gestione-dati.service';

describe('GestioneDatiService', () => {
  let service: GestioneDatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestioneDatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
