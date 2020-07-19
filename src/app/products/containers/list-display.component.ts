import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as fromLayout from '../../reducers';
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-display',
  template: `
    <app-list [searchValue]="searchValue$ | async"></app-list>
  `,
  styles: [
  ]
})
export class ListDisplayComponent implements OnInit {
  searchValue$: Observable<String>;

  constructor(private store: Store<fromLayout.State>) {

    this.searchValue$ = store.pipe(select(fromLayout.selectSearchStateValue));
  }

  ngOnInit(): void {
  }



}
