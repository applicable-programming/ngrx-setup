import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDisplayComponent } from './containers/list-display.component';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {StoreModule} from "@ngrx/store";

import {EffectsModule} from "@ngrx/effects";

const route: Routes = [
  {
    path: '', component: ListDisplayComponent
  }
]


@NgModule({
  declarations: [ListDisplayComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),

  ]
})
export class ProductsModule { }
