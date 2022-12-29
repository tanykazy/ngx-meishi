import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-meishi',
  templateUrl: './meishi.component.html',
  styleUrls: ['./meishi.component.css'],
  animations: [
    trigger('rotate', [
      state('landscape',
        style({
        })),
      state('portrait',
        style({
          rotate: '90deg',
        })),
      transition('portrait <=> landscape',
        animate('200ms ease-in-out'))
    ])
  ]
})
export class MeishiComponent {
  @Input() orientation: 'portrait' | 'landscape' = 'landscape';
}
