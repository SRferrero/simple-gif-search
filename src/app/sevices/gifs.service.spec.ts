import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GifsService, GIPHYURL } from './gifs.service';
import { MOCK_GIFS_RESPONSE } from '../../mocks/giph.mock';

describe('GifsService', () => {
  let service: GifsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GifsService
      ]
    });
    service = TestBed.inject(GifsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve and get the data as expected', async(() => {
    service
      .getGif({query: 'party', limit: 5, lang: 'en'})
      .subscribe((response) => {
        expect(response.data.length === MOCK_GIFS_RESPONSE.data.length);
        expect(response.data[3].title).toEqual(MOCK_GIFS_RESPONSE.data[3].title);
      });

    httpMock
      .expectOne(`${GIPHYURL}&q=party&limit=5&lang=en`)
      .flush(MOCK_GIFS_RESPONSE);
  }));
});
