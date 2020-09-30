import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchProducts(queryTitle: string): Observable<Product[]> {
    return this.http
      .get<{ items: Product[] }>(`${this.API_PATH}?orderBy=newest&q=${queryTitle}`)
      .pipe(map((products) => products.items || []));
  }

}
