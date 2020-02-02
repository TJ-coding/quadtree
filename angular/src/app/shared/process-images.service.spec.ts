import { TestBed } from '@angular/core/testing';

import { ProcessImagesService } from './process-images.service';

describe('ProcessImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessImagesService = TestBed.get(ProcessImagesService);
    expect(service).toBeTruthy();
  });
});
