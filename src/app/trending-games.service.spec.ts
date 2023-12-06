
import { TestBed } from '@angular/core/testing';

import { TrendingGamesService } from './trending-games.service';

describe('TrendingGamesService', () => {
  let service: TrendingGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
