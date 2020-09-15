import { TestBed } from '@angular/core/testing';

import { TravelCrudService } from './travel-crud.service';

describe('TravelCrudService', () => {
  let service: TravelCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
