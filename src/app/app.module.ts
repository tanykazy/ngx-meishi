import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { MeishiModule } from "./components/meishi/meishi.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MeishiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
