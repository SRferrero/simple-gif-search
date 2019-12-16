import { Observable, of } from 'rxjs';

import { MOCK_GIFS_RESPONSE } from './giph.mock';
import { GifsService, GetGifsReq } from '../app/sevices/gifs.service';
import { GetGifs } from '../models/gif.model';

export const mockGifServiceFactory: () => Partial<GifsService> = () => ({
  // @ts-ignore
  getGif(request: GetGifsReq): Observable<GetGifs> {
    return of(MOCK_GIFS_RESPONSE);
  },
});
