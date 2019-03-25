import { TestBed } from '@angular/core/testing';

import { StylesServiceService } from './styles-service.service';

describe('StylesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylesServiceService = TestBed.get(StylesServiceService);
    expect(service).toBeTruthy();
  });
});
