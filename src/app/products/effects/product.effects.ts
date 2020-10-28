import {GoogleBooksService} from "../services/google-books.service";
import {Injectable} from "@angular/core";
import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Product} from "../model/product";
import {ProductsActions} from "../actions";


@Injectable()
export class ProductEffects {

  search$ = createEffect(() =>

      this.actions$.pipe(
        ofType(ProductsActions.search),
        switchMap(({ query }) => {

          return this.googleBooks.searchProducts(query).pipe(
            map((products: Product[]) => ProductsActions.searchSuccess({
              products: products.map(remoteProduct => {
                let localProduct = {} as Product;
                localProduct.id = remoteProduct.id;
                localProduct.volumeInfo = remoteProduct.volumeInfo;
                return localProduct;
              })
            })),
            catchError((err) =>
              of(ProductsActions.searchFailure({ errorMsg: err.message }))
            )
          );
        })
      )
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService
  ) {}
}
