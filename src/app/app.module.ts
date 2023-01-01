import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { MeishiModule } from "./components/meishi/meishi.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MeishiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
