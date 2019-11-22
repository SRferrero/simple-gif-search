import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { GIF } from '../../../models/gif.model';

@Component({
  selector: 'gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.scss']
})
export class GifGridComponent {
  @Input() public gifs: GIF[] = [];
  // initialized in the parent
  @Input() public cardDisplayConfig!: PageEvent;


  isCardInCurrentPage(index: number): boolean {
    // the block has to be smaller than the amount of items times the current index
    // and bigger than the prev block displayed
    return index < this.cardDisplayConfig.pageSize * (this.cardDisplayConfig.pageIndex + 1)
      && index >= this.cardDisplayConfig.pageSize * (this.cardDisplayConfig.pageIndex);
  }
}
