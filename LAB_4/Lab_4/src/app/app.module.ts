import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './products/phones/phone-list/product-list.component';
import { NotFoundComponent } from './products/not-found/not-found.component';
import {WatchListComponent} from "./products/watches/watch-list/watch-list.component";
import {WatchAlertsComponent} from "./products/watches/watch-alerts/watch-alerts.component";
import {LaptopAlertsComponent} from "./products/laptops/laptop-alerts/laptop-alerts.component";
import {LaptopListComponent} from "./products/laptops/laptop-list/laptop-list.component";
import {ProductAlertsComponent} from "./products/phones/phone-alerts/product-alerts.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'watches', component: WatchListComponent},
      {path: 'laptops', component: LaptopListComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    WatchListComponent,
    LaptopListComponent,
    NotFoundComponent,
    LaptopAlertsComponent,
    WatchAlertsComponent,
    ProductAlertsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/