import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

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
export class MeishiComponent implements OnInit, OnDestroy {
  @Input() rotate: boolean = false;
  @Input() size: { width: string, height: string } = {
    // width: '350px', height: '200px'
    width: 'auto', height: 'auto'
  };
  @Input() content: { name?: string, title?: string, logo?: string, phone?: string, email?: string, web?: string, location?: string } | undefined;
  orientation: 'portrait' | 'landscape' = 'landscape';
  private destroyed = new Subject<void>();
  private layoutChanges: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.layoutChanges = breakpointObserver
      .observe(Object.values(Breakpoints))
      .pipe(takeUntil(this.destroyed));
  }

  ngOnInit(): void {
    this.layoutChanges.subscribe(result => {
      if (this.rotate) {
        if (this.breakpointObserver.isMatched('(orientation: landscape)')) {
          this.orientation = 'landscape';
        } else if (this.breakpointObserver.isMatched('(orientation: portrait)')) {
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
