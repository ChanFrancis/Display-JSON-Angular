import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExoInputsComponent } from './exo-inputs/exo-inputs.component';
import { ExoCalculatriceComponent } from './exo-calculatrice/exo-calculatrice.component';
import { TlistComponent } from './tlist/tlist.component';
import { DetailsTransactionComponent } from './details-transaction/details-transaction.component';
import { NavTimeComponent } from './nav-time/nav-time.component';


@NgModule({
  declarations: [
    AppComponent,
    ExoInputsComponent,
    ExoCalculatriceComponent,
    TlistComponent,
    DetailsTransactionComponent,
    NavTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
