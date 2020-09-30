import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromLayout from '../reducers/layout.reducer';
import {LayoutActions} from "../actions";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private store: Store<fromLayout.State>) { }

  ngOnInit(): void {
  }
/*
  searchFieldChanged(value: string) {

    this.store.dispatch(LayoutActions.typeInTheSearch({ searchValue:value }));
    console.log(value);
  }*/
}
