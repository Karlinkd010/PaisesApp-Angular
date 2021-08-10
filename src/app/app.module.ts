import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
