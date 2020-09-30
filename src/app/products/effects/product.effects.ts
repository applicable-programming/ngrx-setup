import {GoogleBooksService} from "../services/google-books.service";
import {Injectable} from "@angular/core";
import {asyncScheduler, of} from "rxjs";
import {catchError, debounceTime, map, switchMap} from "rxjs/operators";
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
            map((products: Product[]) => ProductsActions.searchSuccess({ products })),
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
