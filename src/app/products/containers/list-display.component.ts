import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

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
  private loading$: Observable<boolean> | Store<boolean>;

  constructor(
    private productService: ProductService
  ) {

    this.products$ = productService.entities$;
    this.loading$ = productService.loading$;

  }

  ngOnInit(): void {
    this.productService.getWithQuery({q: 'ngrx'});
  }



}
