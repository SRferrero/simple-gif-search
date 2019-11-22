import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginaitonComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginaitonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatPaginatorModule,
  ],
  exports: [PaginaitonComponent],
})
export class PaginaitonModule { }
