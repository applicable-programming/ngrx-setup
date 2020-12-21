import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
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
  ) { }

  ngOnInit(): void {
  }


  searchFieldChanged(value: string) {

  }

}
