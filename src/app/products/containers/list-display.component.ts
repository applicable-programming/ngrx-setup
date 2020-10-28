import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as fromProducts from '../reducers';
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Component({
  selector: 'app-list-display',
  template: `
    <app-list
      [searchValue]="searchValue$ | async"
      [products]="products$ | async"
    ></app-list>
  `,
  styles: [
  ]
})
export class ListDisplayComponent implements OnInit {
  searchValue$: Observable<String>;
  products$: Observable<Product[]>;

  constructor(
    private store: Store<fromProducts.State>,
  ) {

    this.products$ = store.pipe(select(fromProducts.selectProducts));
    this.searchValue$ = store.pipe(select(fromProducts.selectProductSearch));

  }

  ngOnInit(): void {
  }



}
