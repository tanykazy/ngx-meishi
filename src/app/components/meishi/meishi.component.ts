import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Observable } from 'rxjs';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ngx-meishi',
  templateUrl: './meishi.component.html',
  styleUrls: ['./meishi.component.css'],
  animations: [
    trigger('rotate', [
      state('landscape',
        style({
          rotate: '0deg',
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
export class MeishiComponent implements OnInit {
  @Input() rotate: boolean = false;
  @Input() size: { width: string, height: string } = {
    // width: '350px', height: '200px'
    width: 'auto', height: 'auto'
  };
  @Input() content: { name?: string, title?: string, logo?: string, phone?: string, email?: string, web?: string, location?: string } | undefined;
  orientation: 'portrait' | 'landscape' = 'landscape';
  private layoutChanges: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.layoutChanges = breakpointObserver
      .observe([
        '(orientation: portrait)',
        '(orientation: landscape)'
      ]);
  }

  ngOnInit(): void {
    this.layoutChanges.subscribe(() => {
      if (this.rotate) {
        if (this.breakpointObserver.isMatched('(orientation: landscape)')) {
          this.orientation = 'landscape';
        } else if (this.breakpointObserver.isMatched('(orientation: portrait)')) {
          this.orientation = 'portrait';
        }
      }
    });
  }
}
