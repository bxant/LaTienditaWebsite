import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CATSComponent } from './cats/cats.component';
import { NearMeComponent } from './near-me/near-me.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PurchasesComponent } from './purchases/purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    CATSComponent,
    NearMeComponent,
    StatisticsComponent,
    PurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
