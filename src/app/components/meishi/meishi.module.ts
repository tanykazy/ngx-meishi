import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MeishiComponent } from './meishi.component';

@NgModule({
  imports: [
    CommonModule,
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
