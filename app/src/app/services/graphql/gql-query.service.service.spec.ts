import { TestBed } from '@angular/core/testing';

import { GqlQueryServiceService } from './gql-query.service.service';

describe('GqlQueryServiceService', () => {
  let service: GqlQueryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GqlQueryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
