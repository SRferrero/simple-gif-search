import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginaitonComponent {
  @Input() public pagination!: PageEvent;
  @Output() public changePageSize = new EventEmitter<PageEvent>();

  shouldShow(): boolean {
    //Typescript 3.7 babe!!!
    return this.pagination?.length > 0;
  }
}
