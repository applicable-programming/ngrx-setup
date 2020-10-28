import {Component, Input, OnInit} from '@angular/core';
import {ProductReadingListActions, ProductsActions} from "../../actions";
import {Store} from "@ngrx/store";
import * as fromProducts from '../../reducers';
import {Product} from "../../model/product";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() searchValue;
  @Input() products: Product[];
  constructor(
    private store: Store<fromProducts.State>
  ) { }

  ngOnInit(): void {
  }


  searchFieldChanged(value: string) {

    this.store.dispatch(ProductsActions.search({ query:value }));
    console.log(value);
  }

  addToReadingList(product: Product) {
    this.store.dispatch(ProductReadingListActions.addToReadingList({ product }));
  }

  removeFromReadingList(product: Product) {
    this.store.dispatch(ProductReadingListActions.removeFromReadingList({ productId: product.id }));

  }
}
