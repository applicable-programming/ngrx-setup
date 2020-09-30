import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDisplayComponent } from './containers/list-display.component';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/list/list.component";
import {StoreModule} from "@ngrx/store";

import * as fromProducts from './reducers';
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./effects/product.effects";

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


    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromProducts.productsModuleFeatureKey, fromProducts.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ProductEffects]),
  ]
})
export class ProductsModule { }
