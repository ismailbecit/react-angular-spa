import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ParcelModule } from 'single-spa-angular/parcel';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
