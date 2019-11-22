import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

import { Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { map, debounceTime, filter, switchMap } from 'rxjs/operators';

import { GifsService } from './sevices/gifs.service';
import { GIF, Pagination } from '../models/gif.model';
import { DB_OF_BAD_WORDS, invalidWordValidator } from './common/formvalidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  gifs$!: Observable<GIF[]>;
  pagination$!: Observable<PageEvent>;
  cardDisplayConfig: PageEvent = {length: 0, pageIndex: 0, pageSize: 10};

  readonly searchFomcControl = new FormControl(undefined, [ Validators.required, invalidWordValidator]);

  private readonly paginationSubject = new BehaviorSubject({length: 0, pageIndex: 0, pageSize: 10});

  constructor(private readonly gifService: GifsService) { }

  ngOnInit(): void {
    const gifData$ = this.searchFomcControl.valueChanges.pipe(
      debounceTime(600),
      map((query) => DB_OF_BAD_WORDS.includes(query.toLowerCase()) ? 'hired' : query),
      switchMap((query: string) => this.gifService.getGif({query})),
    )
    const giphyPagination$: Observable<Pagination> = gifData$.pipe(filter(({pagination}) => !!pagination),map(({pagination}) => pagination));

    this.gifs$ = gifData$.pipe(filter(({data}) => !!data),map(({data}) => data));
    this.pagination$ = combineLatest(this.paginationSubject.asObservable(), giphyPagination$)
      .pipe(
        map(([{length, pageIndex, pageSize}, {count}]) => ({length: count || length, pageIndex, pageSize, previousPageIndex: 0}) )
      );
  }

  changeAmountItems({length, pageIndex, pageSize}: PageEvent): void {
    this.cardDisplayConfig = {length, pageIndex, pageSize};
    this.paginationSubject.next({length, pageIndex, pageSize})
  }
}
