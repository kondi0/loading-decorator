import { TestBed } from '@angular/core/testing';

import { LoadingDecoratorService } from './loading-decorator.service';

describe('LoadingDecoratorService', () => {
  let service: LoadingDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
