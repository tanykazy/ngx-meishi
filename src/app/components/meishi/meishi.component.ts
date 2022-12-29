import { Component, Input, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
export class MeishiComponent implements OnDestroy {
  @Input() rotate: boolean = false;
  @Input() size: { width: string, height: string } = {
    width: '350px', height: '200px'
  };
  destroyed = new Subject<void>();
  orientation: 'portrait' | 'landscape' = 'landscape';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe(Object.values(Breakpoints))
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        if (this.rotate) {
          if (breakpointObserver.isMatched('(orientation: landscape)')) {
            this.orientation = 'landscape';
          } else if (breakpointObserver.isMatched('(orientation: portrait)')) {
            this.orientation = 'portrait';
          }
        }
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            console.log(query);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
