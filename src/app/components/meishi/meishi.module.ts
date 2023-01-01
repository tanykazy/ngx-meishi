import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';

import { MeishiComponent } from './meishi.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  declarations: [
    MeishiComponent
  ],
  exports: [
    MeishiComponent
  ]
})
export class MeishiModule { }
