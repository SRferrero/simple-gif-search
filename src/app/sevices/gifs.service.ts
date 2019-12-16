import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { map, } from 'rxjs/operators';

import { GetGifs } from '../../models/gif.model';

const apiKey = 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6';
export const GIPHYURL = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;

export interface GetGifsReq {
  lang?: string;
  query: string;
  limit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private readonly httpClient: HttpClient) { }

  getGif({query, lang, limit}: GetGifsReq): Observable<GetGifs> {
    return this.httpClient
      .get(`${GIPHYURL}&q=${encodeURI(query)}&limit=${limit}&lang=${lang}`)
      .pipe(
        map((gifs: GetGifs) => gifs)
      );
  }

}
