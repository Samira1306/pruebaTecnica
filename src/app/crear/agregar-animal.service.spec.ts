import { TestBed } from '@angular/core/testing';

import { AgregarAnimalService } from './agregar-animal.service';

describe('AgregarAnimalService', () => {
  let service: AgregarAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
