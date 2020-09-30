import { TestBed } from '@angular/core/testing';

import { GoogleBooksService } from './google-books.service';

describe('GoogleBooksService', () => {
  let service: GoogleBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
