import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { MeishiComponent } from './components/meishi/meishi.component';
import { MeishiModule } from "./components/meishi/meishi.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // MeishiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeishiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
