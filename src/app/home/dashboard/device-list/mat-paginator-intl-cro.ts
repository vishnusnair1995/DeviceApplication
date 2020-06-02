import {MatPaginatorIntl} from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl {
  itemsPerPageLabel = 'Showing';
  nextPageLabel     = 'Slijedeća stranica';
  previousPageLabel = 'Prethodna stranica';
  firstPageLabel ="Showing";



}