import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./shared/layout/layout.module";
import {ActionReducer, MetaReducer, StoreModule} from "@ngrx/store";
import {ROOT_REDUCERS} from "./reducers";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {localStorageSync} from "ngrx-store-localstorage";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";



export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['layout'], rehydrate: true})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule,

      /**
       * StoreModule.forRoot is imported once in the root module, accepting a reducer
       * function or object map of reducer functions. If passed an object of
       * reducers, combineReducers will be run creating your application
       * meta-reducer. This returns all providers for an @ngrx/store
       * based application.
       */
      StoreModule.forRoot(ROOT_REDUCERS,
        {metaReducers}
        ),

      /**
       * @ngrx/router-store keeps router state up-to-date in the store.
       */
      StoreRouterConnectingModule.forRoot(),

      /**
       * Store devtools instrument the store retaining past versions of state
       * and recalculating new states. This enables powerful time-travel
       * debugging.
       *
       * To use the debugger, install the Redux Devtools extension for either
       * Chrome or Firefox
       *
       * See: https://github.com/zalmoxisus/redux-devtools-extension
       */
      StoreDevtoolsModule.instrument({
        name: 'NgRx demo setup App',

        // In a production build you would want to disable the Store Devtools
        // logOnly: environment.production,
      }),

      /**
       * EffectsModule.forRoot() is imported once in the root module and
       * sets up the effects class to be initialized immediately when the
       * application starts.
       *
       * See: https://ngrx.io/guide/effects#registering-root-effects
       */
      EffectsModule.forRoot([]),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
